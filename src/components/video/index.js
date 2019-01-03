import React from 'react'
import ReactPlayer from 'react-player'
import * as S from './styles'

/* eslint-disable */
const VideoEmbed = ({ data }) => {
  const { externalUrl, title, bottomText, removeMarginBottom } = data
  const opts = {
    youtube: {
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
      },
    },
  }

  return (
    <S.Wrapper removeMarginBottom={removeMarginBottom}>
      <h1>{title}</h1>
      <S.VideoWrapper>
        <ReactPlayer
          url={externalUrl}
          config={{ ...opts }}
          width="100%"
          height="100%"
          preload
        />
      </S.VideoWrapper>
      <p>{bottomText}</p>
    </S.Wrapper>
  )
}
/* eslint-enable */
export default VideoEmbed
