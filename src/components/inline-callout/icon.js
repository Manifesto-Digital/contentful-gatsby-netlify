import React from 'react'
import PropTypes from 'prop-types'
import SpeechBubble from '../../assets/svg/speech-bubble.svg'
import Envelope from '../../assets/svg/envelope.svg'
// import Download from '../../assets/svg/download.svg'

import { BannerSVG } from './styles'

const Icon = ({ icon }) => {
  console.log(icon)

  let choosenIcon

  if (icon === 'speech-bubble') {
    choosenIcon = SpeechBubble
  } else if (icon === 'envelope') {
    choosenIcon = Envelope
  } else if (icon === 'no-icon') {
    choosenIcon = null
  }

  return choosenIcon !== null ? <BannerSVG as={choosenIcon} /> : null

  // return <BannerSVG as={choosenIcon} />
}

Icon.propTypes = {
  icon: PropTypes.string,
}

export default Icon
