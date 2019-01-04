import React from 'react'
import PropTypes from 'prop-types'
import { richTextPropTypes } from '../../prop-types'
// Components
import Icon from './icon'
// Styles
import { InlineBanner, TextWrapper } from './styles'

function formatString(string) {
  return string !== null ? string.replace(/\s+/g, '-').toLowerCase() : 'default'
}

const InlineCallOut = ({ content }) => {
  const { icon, borderColour, bannerColour } = content
  const callOutText = content.content
  return (
    <InlineBanner
      borderCol={formatString(borderColour)}
      bannerCol={formatString(bannerColour)}
    >
      <Icon icon={formatString(icon)} />
      <TextWrapper richText={callOutText} />
    </InlineBanner>
  )
}

InlineCallOut.propTypes = {
  content: PropTypes.shape({
    content: PropTypes.shape(richTextPropTypes).isRequired,
    icon: PropTypes.string,
    borderColour: PropTypes.string,
    bannerCol: PropTypes.string,
  }),
}

export default InlineCallOut
