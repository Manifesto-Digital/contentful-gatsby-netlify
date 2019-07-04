import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RichText from '../rich-text';
import { Block, BlockContent, BlockTitle } from './styles';
import { bracketsToLink } from '../../utils/rich-text-formatting/bracketsToLink';

const ContentWithReferences = memo(function ContentWithReferences({
  tableOfContents,
  updateReferenceList,
}) {
  // Not stateful as no re-renders wanted. Rich text uses footNotesCount
  // for anchor link rendering, while at the same time triggers
  //  the update updateFootNotesCount when square brackets are detected
  let footNotesCount = 0;
  const updateFootNotesCount = count => {
    footNotesCount = count;
  };

  if (!tableOfContents) return null;

  return (
    <Block>
      {tableOfContents.map((item, i) => (
        <BlockContent key={i}>
          <BlockTitle id={`title-${i}`}>{item.title}</BlockTitle>

          <RichText
            richText={item.textContent}
            textRenderer={text =>
              bracketsToLink(
                text,
                footNotesCount,
                updateReferenceList,
                updateFootNotesCount
              )
            }
          />
        </BlockContent>
      ))}
    </Block>
  );
});

ContentWithReferences.propTypes = {
  tableOfContents: PropTypes.array.isRequired,
  updateReferenceList: PropTypes.func.isRequired,
};

export default ContentWithReferences;
