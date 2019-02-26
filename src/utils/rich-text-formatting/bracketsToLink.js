export const bracketsToLink = rawText => {
  const formattedContent = [];
  let count = 0;
  [...rawText].forEach(content => {
    const richText = content.textContent.childContentfulRichText.html;
    const formattedText = richText.replace(/\[+(.*?)\]+/g, function() {
      count += 1;
      return `&nbsp;<a id="source-${count}" href="#reference-${count}">[${count}]</a>&nbsp;`;
    });
    if (formattedText) formattedContent.push(formattedText);
    else formattedContent.push(richText);
  });
  return formattedContent;
};

export default bracketsToLink;
