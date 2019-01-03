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
  let choosenIcon

  switch (icon) {
    case 'speech-bubble':
      choosenIcon = SpeechBubble
      break
    case 'envelope':
      choosenIcon = Envelope
      break
    case 'download':
      choosenIcon = Download
      break
    case 'printer':
      choosenIcon = Printer
      break
    case 'open-book':
      choosenIcon = OpenBook
      break
    case 'information':
      choosenIcon = Information
      break
    case 'telephone':
      choosenIcon = Telephone
      break
    case 'map-marker':
      choosenIcon = MapMarker
      break
    default:
      choosenIcon = null
  }

  return choosenIcon !== null ? <BannerSVG as={choosenIcon} /> : null
}

Icon.propTypes = {
  icon: PropTypes.string,
}

export default Icon
