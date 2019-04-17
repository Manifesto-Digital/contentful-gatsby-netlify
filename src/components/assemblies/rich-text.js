import React from 'react';
import PropTypes from 'prop-types';
// Components
import InlineCallOut from '../inline-callout';
import RichText from '../rich-text';
import CTABanner from '../cta-banner';

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
          cta={{ externalUrl: true, ...fields.cta }}
          bannerColour={fields.bannerColour}
        />
      );
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
