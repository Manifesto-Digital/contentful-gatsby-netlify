import React from 'react'
import PropTypes from 'prop-types'
import {} from './styles'

const ShareBlock = ({ data }) => {
  const { headerText, shareType } = data
  let shareUrl
  switch (shareType) {
    case 'Email':
      shareUrl = 'mailto:?&body='
      break
    case 'WhatsApp':
      shareUrl = 'https://api.whatsapp.com/send?text='
      break
    case 'Twitter':
      shareUrl = 'https://twitter.com/home?status='
      break
    case 'Facebook':
      shareUrl = 'https://www.facebook.com/sharer/sharer.php?u='
      break
    default:
      shareUrl = 'mailto:?&body='
      break
  }
  return (
    <div>
      {headerText}
      <div
        onClick={() => window.print()}
        onKeyDown={() => window.print()}
        role="button"
        tabIndex="0"
      >
        Print this article
      </div>
      <a href={`${shareUrl}${window.location.href}`}>
        {shareType === 'Email' ? 'Email' : 'Share'}
        {' this article'}
      </a>
    </div>
  )
}

ShareBlock.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    shareType: PropTypes.string.isRequired,
  }),
}

export default ShareBlock
