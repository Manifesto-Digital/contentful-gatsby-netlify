import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import RichTextAssembly from '../assemblies/rich-text';
import Image from '../image';
import { fieldsMap } from './helpers';
import { Wrapper } from './styles';

const RichText = ({ richText, className, sidebar }) => {
  const options = {
    renderNode: {
      /* eslint-disable react/display-name */
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageObject = node.data.target.fields;
        const flattenedFields = fieldsMap(imageObject);
        return <Image image={flattenedFields} width={1000} />;
      },

      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { fields, sys } = node.data.target;
        const flattenedFields = fieldsMap(fields);
        return <RichTextAssembly fields={flattenedFields} sys={sys} />;
      },
      [INLINES.ENTRY_HYPERLINK]: node => {
        // There is currently a patch for Gatsby source contentful to avoid a max stack call
        // created by links in rich text. The only field that is set currently on the target
        // is the slug field
        if (!node.data.target.fields || !node.data.target.fields.slug) {
          return;
        }
        const { fields } = node.data.target;
        if (!fields || !fields) {
          return;
        }
        const flattenedFields = fieldsMap(fields);
        return (
          <a href={`/${flattenedFields.slug}`}>{documentToHtmlString(node)}</a>
        );
      },
      /* eslint-enable */
    },
  };

  const json = richText.json ? richText.json : richText; // Embedded Rich text json has key content currently

  if (!json) return null;

  return (
    <Wrapper sidebar={sidebar} className={className}>
      {documentToReactComponents(json, options)}
    </Wrapper>
  );
};
RichText.propTypes = {
  richText: PropTypes.shape({
    json: PropTypes.object,
    content: PropTypes.object,
  }).isRequired,
  className: PropTypes.string,
  sidebar: PropTypes.bool,
};

export default RichText;
