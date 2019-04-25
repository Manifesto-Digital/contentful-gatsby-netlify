import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
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

      [BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
        const { fields, sys } = node.data.target;
        const flattenedFields = fieldsMap(fields);
        return <RichTextAssembly fields={flattenedFields} sys={sys} />;
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
