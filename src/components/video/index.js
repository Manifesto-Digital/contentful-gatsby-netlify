import React from 'react'
import ReactPlayer from 'react-player'
import theme from '../theme/variables'
import RichText from '../rich-text'
import { Wrapper, VideoWrapper, BottomText } from './styles'

/* eslint-disable */
const VideoEmbed = ({ data }) => {
  const {
    externalUrl,
    title,
    bottomText,
    removeMarginBottom,
    metaDescription,
    createdAt,
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
        <meta
          itemProp="description"
          content={metaDescription ? metaDescription : title}
        />
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
/* eslint-enable */
export default VideoEmbed
