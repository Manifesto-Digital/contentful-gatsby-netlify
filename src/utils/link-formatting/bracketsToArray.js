export const bracketsToArray = rawText => {
  const referenceArray = [];
  [...rawText].forEach(content => {
    const richText = content.textContent.childContentfulRichText.html;
    const hasLink = richText.match(/\[+(.*?)\]+/g);
    referenceArray.push(...hasLink);
  });
  return referenceArray;
};

export default bracketsToArray;
