import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { UnBulletedList } from './styles'

const OrderedList = ({ content }) => {
  if (!content || content.length === 0) return null

  // Temporary bug on contentful that lists are nested two extra levels deep
  const listItems = content.map((text, i) => (
    <li key={i}>{text.content[0].content[0].value}</li>
  ))

  return <UnBulletedList>{listItems}</UnBulletedList>
}

OrderedList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
}

export default OrderedList
