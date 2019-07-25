import React from 'react';
import PropTypes from 'prop-types';
// Components
import InlineCallOut from '../inline-callout';
import RichText from '../rich-text';
import CTABanner from '../cta-banner';
import DownloadBanner from '../download-banner';
import Map from '../google-map';
import AdviceSearchBox from '../advice-search-box';
import VideoEmbed from '../video';
import Accordions from '../accordion/accordions';

const Assemblies = ({ fields, sys }) => {
  const type = sys.contentType.sys.id;

  if (type === 'topicInlineCallout') {
    return (
      <InlineCallOut {...fields} insideContainer>
        <RichText richText={fields.content} />
      </InlineCallOut>
    );
  }

  if (type === 'assemblyCta') {
    // TODO: Improve gatsby source contentful patch mutation to
    // include internal {type} so that we can use link handler
    const cta = fields.cta[0];
    cta.link = {
      internal: { type: 'ContentfulComponentExternalLink' },
      ...cta.link[0],
    };
    return (
      <CTABanner
        headerText={fields.ctaHeaderText}
        removeMarginBottom={fields.removeMarginBottom}
        cta={cta}
        bannerColour={fields.bannerColour}
        insideContainer
      />
    );
  }

  if (type === 'assemblyDownloadBanner') {
    return <DownloadBanner banner={fields} />;
  }

  if (type === 'topicGoogleMap') {
    return <Map data={fields} insideContainer />;
  }

  if (type === 'topicAdviceSearchBox') {
    return <AdviceSearchBox data={fields} insideContainer />;
  }
  if (type === 'topicVideoEmbed') {
    return <VideoEmbed data={fields} insideContainer />;
  }
  if (type === 'assemblyAccordions') {
    return <Accordions data={fields} insideContainer />;
  }

  return null;
};

Assemblies.propTypes = {
  fields: PropTypes.object,
  sys: PropTypes.object,
};

export default Assemblies;
