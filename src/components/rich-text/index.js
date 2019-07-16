import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Wrapper } from './styles';
import RenderNode from './render-node';

const RichText = ({ richText, className, sidebar, textRenderer }) => {
  const json = richText && richText.json ? richText.json : richText; // Embedded Rich text json has key content currently
  if (!json) return null;

  return (
    <Wrapper sidebar={sidebar} className={className}>
      {documentToReactComponents(json, RenderNode(textRenderer))}
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
  textRenderer: PropTypes.func,
};

export default RichText;
