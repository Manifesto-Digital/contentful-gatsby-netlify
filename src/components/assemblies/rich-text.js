import React from 'react';
import PropTypes from 'prop-types';
// Components
import InlineCallOut from '../inline-callout';
import RichText from '../rich-text';

const Assemblies = ({ fields, sys }) => {
  const AssemblyCheck = () => {
    const type = sys.contentType.sys.id;

    console.log('content nyagfgagas', fields.content);

    if (type === 'topicInlineCallout') {
      return (
        <InlineCallOut {...fields}>
          <RichText richText={fields.content} />
        </InlineCallOut>
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
