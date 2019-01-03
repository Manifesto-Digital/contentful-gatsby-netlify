import React from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'
import { richTextPropTypes } from '../../prop-types'
// Components

// Styles
import { InlineBanner, TextWrapper } from './styles'

const InlineCallOut = ({ content }) => {
  let { icon } = content
  const callOutText = content.content

  icon = icon.replace(/\s+/g, '-').toLowerCase()
  return (
    <InlineBanner>
      <Icon icon={icon} />
      <TextWrapper richText={callOutText} />
    </InlineBanner>
  )
}

InlineCallOut.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.shape(richTextPropTypes).isRequired,
    icon: PropTypes.string,
  }),
}

export default InlineCallOut
