import React from 'react'
import PropTypes from 'prop-types'
import { richTextPropTypes } from '../../prop-types'
// Components
// import Image from '../image'
import RichText from '../richText'
// Styles
import { InlineBanner } from './styles'

const InlineCallOut = ({ content }) => {
  const { icon } = content
  const callOutText = content.content

  console.log({ callOutText, icon })
  return (
    <InlineBanner>
      <RichText richText={callOutText} />
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
