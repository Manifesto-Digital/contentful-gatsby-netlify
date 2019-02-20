export const bracketsToArray = rawText => {
  const referenceArray = [];
  [...rawText].forEach(content => {
    const richText = content.textContent.childContentfulRichText.html;
    const hasLink = richText.match(/\[+(.*?)\]+/g);
    if (hasLink) referenceArray.push(...hasLink);
  });
  return referenceArray;
};

export default bracketsToArray;
