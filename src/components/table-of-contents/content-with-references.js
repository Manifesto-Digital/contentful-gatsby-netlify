import React from 'react';
import PropTypes from 'prop-types';
import { Block, BlockContent, BlockTitle } from './styles';
import { Wrapper } from '../rich-text/styles';

const ContentWithReferences = ({ contents }) => {
  if (!contents) return null;

  return (
    <Block>
      {contents.map((item, i) => (
        <BlockContent key={i}>
          <BlockTitle id={`title-${i}`}>{item.title}</BlockTitle>
          <Wrapper>{item.textContent}</Wrapper>
        </BlockContent>
      ))}
    </Block>
  );
};

ContentWithReferences.propTypes = {
  contents: PropTypes.array.isRequired,
};

export default ContentWithReferences;
