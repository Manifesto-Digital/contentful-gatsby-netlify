import React from 'react'
import PropTypes from 'prop-types'
import { addMarksToContent } from '../../utils/content-formatting'

const Paragraph = ({ content }) => {
  if (!content || content.length === 0) return null

  const markup = addMarksToContent(content)

  function createMarkup(markupToRender) {
    return { __html: markupToRender }
  }

  return <p dangerouslySetInnerHTML={createMarkup(markup)} /> // eslint-disable-line react/no-danger
}

Paragraph.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      marks: PropTypes.array,
      nodeType: PropTypes.string,
    })
  ),
}

export default Paragraph
