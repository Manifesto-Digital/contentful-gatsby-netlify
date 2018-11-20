import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { BulletedList } from './styles'

const UnorderedList = ({ content }) => {
  if (!content || content.length === 0) return null

  // Temporary bug on contentful that lists are nested two extra levels deep
  const listItems = content.map((text, i) => {
    const itemContent = text.content[0].content[0].value
    if (!itemContent.length > 0 || !itemContent) return null

    return <li key={i}>{itemContent}</li>
  })

  return <BulletedList>{listItems}</BulletedList>
}

UnorderedList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
}

export default UnorderedList
