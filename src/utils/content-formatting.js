export const addMarksToContent = content => {
  const markup = content
    .map(block => {
      const { marks, value } = block;
      // As there may be multiple marks per piece of content, we need to
      // store the opening and closing tags and then wrap the content
      if (marks && marks.length > 0) {
        let openingMarks = '';
        let closingMarks = '';

        marks.forEach(mark => {
          if (mark.type === 'underline') {
            openingMarks = `<span className="underline">${openingMarks}`;
            closingMarks = `${closingMarks}</span>`;
          }
          if (mark.type === 'italic') {
            openingMarks = `<em>${openingMarks}`;
            closingMarks = `${closingMarks}</em>`;
          }
          if (mark.type === 'bold') {
            openingMarks = `<strong>${openingMarks}`;
            closingMarks = `${closingMarks}</strong>`;
          }
        });
        return `${openingMarks}${value}${closingMarks}`;
      }
      return value;
    })
    .join('');

  return markup;
};

// Used to return a formatted and consistent string from a human readable cms field.
// If the field is not required and left empty, 'default' is returned
export const consistentString = string => {
  if (string !== null) {
    return string
      .replace(/\s+/g, '-')
      .replace(/'+/g, '')
      .toLowerCase();
  }

  return 'default';
};

// Converts mime types to consistent filetype strings
// If a filetypes is missing here, simply add it to the switch statement
// See here for a list of possible mime types https://www.freeformatter.com/mime-types-list.html
export const mimeTypeToString = mime => {
  switch (mime) {
    case 'application/pdf':
      return 'PDF';
    case 'image/jpeg':
      return 'JPEG';
    case 'image/png':
      return 'PNG';
    default:
      return null;
  }
};
