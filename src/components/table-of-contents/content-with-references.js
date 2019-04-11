import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RichText from '../rich-text';
import { Block, BlockContent, BlockTitle } from './styles';
import { bracketsToLink } from '../../utils/rich-text-formatting/bracketsToLink';
import { bracketsToArray } from '../../utils/rich-text-formatting/bracketsToArray';

const ContentWithReferences = ({ tableOfContents, updateReferenceList }) => {
  const [contentWithReferences, createReferenceContent] = useState([]);

  useEffect(() => {
    const convertBracketsToLink = text => {
      const formattedContent = bracketsToLink(text);
      createReferenceContent(formattedContent);
    };

    const convertBracketsToArray = text => {
      const referenceArray = bracketsToArray(text);
      updateReferenceList(referenceArray);
    };
    if (!tableOfContents) return;
    convertBracketsToLink(tableOfContents);
    convertBracketsToArray(tableOfContents);
  }, [tableOfContents, updateReferenceList]);

  if (!tableOfContents) return null;

  return (
    <Block>
      {tableOfContents.map((item, i) => (
        <BlockContent key={i}>
          <BlockTitle id={`title-${i}`}>{item.title}</BlockTitle>
          {contentWithReferences[i] && (
            <RichText
              richText={{
                childContentfulRichText: {
                  html: contentWithReferences[i],
                },
              }}
            />
          )}
        </BlockContent>
      ))}
    </Block>
  );
};

ContentWithReferences.propTypes = {
  tableOfContents: PropTypes.array.isRequired,
  updateReferenceList: PropTypes.func.isRequired,
};

export default ContentWithReferences;
