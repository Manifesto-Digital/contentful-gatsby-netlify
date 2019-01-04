import React from 'react'
import PropTypes from 'prop-types'
import SpeechBubble from '../../assets/svg/icons/comment-light.svg'
import Envelope from '../../assets/svg/icons/envelope-light.svg'
import Download from '../../assets/svg/icons/download-light.svg'
import Printer from '../../assets/svg/icons/print-light.svg'
import OpenBook from '../../assets/svg/icons/book-open-light.svg'
import Exclamation from '../../assets/svg/icons/exclamation-circle-light.svg'
import Telephone from '../../assets/svg/icons/phone-light.svg'
import MapMarker from '../../assets/svg/icons/map-marker-alt-light.svg'

import { BannerSVG } from './styles'

const Icon = ({ icon }) => {
  let chosenIcon

  switch (icon) {
    case 'speech-bubble':
      chosenIcon = SpeechBubble
      break
    case 'envelope':
      chosenIcon = Envelope
      break
    case 'download':
      chosenIcon = Download
      break
    case 'printer':
      chosenIcon = Printer
      break
    case 'open-book':
      chosenIcon = OpenBook
      break
    case 'exclamation-mark':
      chosenIcon = Exclamation
      break
    case 'telephone':
      chosenIcon = Telephone
      break
    case 'map-marker':
      chosenIcon = MapMarker
      break
    default:
      chosenIcon = null
  }

  return chosenIcon !== null ? <BannerSVG as={chosenIcon} /> : null
}

Icon.propTypes = {
  icon: PropTypes.string,
}

export default Icon
