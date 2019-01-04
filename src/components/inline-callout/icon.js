import React from 'react'
import PropTypes from 'prop-types'
import SpeechBubble from '../../assets/svg/icons/speech-bubble.svg'
import Envelope from '../../assets/svg/icons/envelope.svg'
import Download from '../../assets/svg/icons/download.svg'
import Printer from '../../assets/svg/icons/printer.svg'
import OpenBook from '../../assets/svg/icons/open-book.svg'
import Information from '../../assets/svg/icons/information.svg'
import Telephone from '../../assets/svg/icons/telephone.svg'
import MapMarker from '../../assets/svg/icons/map-marker.svg'

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
    case 'information':
      chosenIcon = Information
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
