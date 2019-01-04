import React from 'react'
import PropTypes from 'prop-types'

const AdviceSearchBox = ({ data }) => {
  const { headerText, placeholder } = data
  return (
    <div>
      <h3>{headerText}</h3>
      <input placeholder={placeholder || 'Search topics'} />
      <button type="submit">Search</button>
    </div>
  )
}

AdviceSearchBox.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }),
}

export default AdviceSearchBox
