export const addMarksToContent = content => {
  const markup = content
    .map(block => {
      const { marks, value } = block
      // As there may be multiple marks per piece of content, we need to
      // store the opening and closing tags and then wrap the content
      if (marks && marks.length > 0) {
        let openingMarks = ''
        let closingMarks = ''

        marks.forEach(mark => {
          if (mark.type === 'underline') {
            openingMarks = `<span className="underline">${openingMarks}`
            closingMarks = `${closingMarks}</span>`
          }
          if (mark.type === 'italic') {
            openingMarks = `<em>${openingMarks}`
            closingMarks = `${closingMarks}</em>`
          }
          if (mark.type === 'bold') {
            openingMarks = `<strong>${openingMarks}`
            closingMarks = `${closingMarks}</strong>`
          }
        })
        return `${openingMarks}${value}${closingMarks}`
      }
      return value
    })
    .join('')

  return markup
}
