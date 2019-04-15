import React from 'react';
import PropTypes from 'prop-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import RichTextAssembly from '../assemblies/rich-text';
import { Wrapper } from './styles';

const RichText = ({ richText, className, sidebar }) => {
  console.log('richText', richText);

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
        const { fields, sys } = node.data.target;

        const flattenedFields = Object.keys(fields).reduce((accum, key) => {
          accum[key] = fields[key]['en-GB'];
          return accum;
        }, {});

        return <RichTextAssembly fields={flattenedFields} sys={sys} />;
      },
    },
  };

  return (
    <Wrapper sidebar={sidebar} className={className}>
      {documentToReactComponents(richText, options)}
    </Wrapper>
  );
};
RichText.propTypes = {
  richText: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  className: PropTypes.string,
  sidebar: PropTypes.bool,
};

export default RichText;
