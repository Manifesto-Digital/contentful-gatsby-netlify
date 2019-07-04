import React from 'react';

export const bracketsToLink = (
  rawText,
  count,
  updateReferenceList,
  updateCount,
  loaded
) => {
  const regex = /\[+(.*?)\]+/g;
  const textWithMatches = rawText.split(regex);
  if (loaded) return textWithMatches;

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

export default bracketsToLink;
