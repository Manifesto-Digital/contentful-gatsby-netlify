import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import theme from '../theme/variables'
import RichText from '../rich-text'
import { Wrapper, VideoWrapper, BottomText } from './styles'

const VideoEmbed = ({ data }) => {
  const {
    externalUrl,
    title,
    bottomText,
    removeMarginBottom,
    metaDescription,
  } = data

  const options = {
    youtube: {
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
      },
    },
  }

  return (
    <Wrapper theme={theme} removeMarginBottom={removeMarginBottom}>
      <h3>{title}</h3>
      <VideoWrapper>
        <ReactPlayer
          url={externalUrl}
          config={{ ...options }}
          width="100%"
          height="100%"
          preload="true"
        />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={metaDescription || title} />
        <meta itemProp="embedUrl" content={externalUrl} />
      </VideoWrapper>
      {bottomText && (
        <BottomText>
          <RichText richText={bottomText} />
        </BottomText>
      )}
    </Wrapper>
  )
}

VideoEmbed.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    bottomText: PropTypes.string,
    metaDescription: PropTypes.string,
    externalUrl: PropTypes.string.isRequired,
    removeMarginBottom: PropTypes.bool,
  }),
}

export default VideoEmbed
