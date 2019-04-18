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

const Assemblies = ({ fields, sys }) => {
  const AssemblyCheck = () => {
    const type = sys.contentType.sys.id;

    if (type === 'topicInlineCallout') {
      return (
        <InlineCallOut {...fields} insideContainer>
          <RichText richText={fields.content} />
        </InlineCallOut>
      );
    }

    if (type === 'assemblyCta') {
      return (
        <CTABanner
          headerText={fields.ctaHeaderText}
          removeMarginBottom={fields.removeMarginBottom}
          cta={{ externalUrl: true, ...fields.cta[0] }}
          bannerColour={fields.bannerColour}
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

    return null;
  };

  return <AssemblyCheck />;
};

Assemblies.propTypes = {
  fields: PropTypes.object,
  sys: PropTypes.object,
};

export default Assemblies;
