import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ content, type }) => {
  if (!content || content.length === 0 || !type) return null
  const HeaderTag = `h${type.split('-').pop()}`
  return <HeaderTag>{content.map(text => text.value)}</HeaderTag>
}

Header.propTypes = {
  type: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    })
  ),
}

export default Header
