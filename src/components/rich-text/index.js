import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import RichTextAssembly from '../assemblies/rich-text';
import Image from '../image';
import LinkHandler from '../link-handler';
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
        if (!fields) return null;
        const flattenedFields = fieldsMap(fields);
        return <RichTextAssembly fields={flattenedFields} sys={sys} />;
      },
      [INLINES.ENTRY_HYPERLINK]: node => {
        // There is currently a patch for Gatsby source contentful to avoid a max stack call
        // created by links in rich text. The only field that is set currently on the target
        // is the slug field
        const { fields, sys } = node.data.target;
        // If fields has URL then this is an external link component
        if (!fields || (!fields.slug && !fields.URL)) {
          return;
        }
        const flattenedFields = fieldsMap(fields);
        const externalLink = sys.contentType.sys.id === 'topicExternalLink';
        const linkType = externalLink
          ? 'ContentfulComponentExternalLink'
          : sys.contentType.sys.id;

        return (
          <LinkHandler
            link={{ internal: { type: linkType }, ...flattenedFields }}
          >
            {documentToReactComponents(node)}
          </LinkHandler>
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
