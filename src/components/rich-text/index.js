import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import RichTextAssembly from '../assemblies/rich-text';
import { Wrapper } from './styles';

const RichText = ({ richText, className, sidebar }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node, next) => {
        const { fields, sys } = node.data.target;

        const fieldsMap = fieldsToMap =>
          Object.keys(fieldsToMap).reduce((accum, key) => {
            const field = fieldsToMap[key];

            if (Object.prototype.hasOwnProperty.call(field, 'en-GB')) {
              accum[key] = flattenKey('en-GB', field); // eslint-disable-line no-use-before-define
            } else if (typeof field === 'object' && field !== null) {
              accum[key] = fieldsMap(field);
            } else {
              accum[key] = field;
            }
            return accum;
          }, {});

        const flattenKey = (key, field) => {
          if (typeof field[key] === 'string') {
            return field[key];
          }
          if (Array.isArray(field[key]) && field[key].length === 1) {
            return fieldsMap(field[key][0].fields);
          }
          if (
            typeof field[key] === 'object' &&
            Object.prototype.hasOwnProperty.call(field[key], 'fields')
          ) {
            return fieldsMap(field[key].fields);
          }

          return field;
        };

        const flattenedFields = fieldsMap(fields);
        console.log('flattenedFields', flattenedFields);
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
