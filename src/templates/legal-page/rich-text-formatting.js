import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RenderNode from '../../components/rich-text/render-node';

export const handleBracketsInRichText = (
  rawText,
  count,
  updateReferenceList,
  updateCount
) => {
  const regex = /\[+(.*?)\]+/g;
  const textWithMatches = rawText.split(regex);

  if (textWithMatches.length > 1) {
    // Rich text formats in paragraph chunks, set to count to account for preceding footnotes
    let countToShow = count;

    for (let i = 1; i < textWithMatches.length; i += 2) {
      countToShow += 1;
      // Push text to reference list so we can later render the footnotes list
      updateReferenceList(textWithMatches[i]);
      textWithMatches[i] = (
        <a
          id={`source-${countToShow}`}
          href={`#reference-${countToShow}`}
          key={i}
        >
          [{countToShow}]
        </a>
      );
    }
    // Update the count so the next rich text knows the count to start from
    updateCount(countToShow);
  }

  return textWithMatches;
};
export default handleBracketsInRichText;

/**
 * Takes an array of content
 * The RichText is modified if square brackets are detected and the
 * modified content along with an array of generated footnotes are returned
 *
 * @param {{title, textContent}[]} tableOfContents
 */
export const createFootnotes = tableOfContents => {
  const footnotes = [];
  const pushToFootnotes = text => {
    footnotes.push(text);
  };
  let foundFootnotesCount = 0;
  const updateFootnotesCount = count => {
    foundFootnotesCount = count;
  };

  const modifiedContent = tableOfContents.reduce((acc, content) => {
    const richText = content.textContent;
    const renderedModifiedRichText = documentToReactComponents(
      richText.json,
      RenderNode(text =>
        handleBracketsInRichText(
          text,
          foundFootnotesCount,
          pushToFootnotes,
          updateFootnotesCount
        )
      )
    );
    const updatedContent = Object.assign({}, content);
    updatedContent.textContent = renderedModifiedRichText;
    acc.push(updatedContent);
    return acc;
  }, []);

  return [modifiedContent, footnotes];
};
