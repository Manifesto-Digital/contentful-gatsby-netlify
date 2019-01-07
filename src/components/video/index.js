import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import theme from '../theme/variables'
import RichText from '../rich-text'
import { Wrapper, VideoWrapper, BottomText } from './styles'

const VideoEmbed = ({ data }) => {
  const [videoDuration, setDuration] = useState(null)
  const [videoURL, setVideoID] = useState(null)
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

  const getVideoID = url => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
      setVideoID(match[2])
    }
  }

  useEffect(
    () => {
      getVideoID(externalUrl)
    },
    [externalUrl]
  )

  return (
    <Wrapper theme={theme} removeMarginBottom={removeMarginBottom}>
      <h3>{title}</h3>
      <VideoWrapper
        itemProp="video"
        itemScope
        itemType="http://schema.org/VideoObject"
      >
        <ReactPlayer
          url={externalUrl}
          config={{ ...options }}
          width="100%"
          height="100%"
          preload="true"
          onReady={videoData => setDuration(`PT${videoData.getDuration()}S`)}
        />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={metaDescription || title} />
        <meta itemProp="embedUrl" content={externalUrl} />
        {videoDuration && <meta itemProp="duration" content={videoDuration} />}
        {videoURL && externalUrl.includes('you') && (
          <meta
            itemProp="thumbnailURL"
            content={`https://i.ytimg.com/vi/${videoURL}/hqdefault.jpg`}
          />
        )}
        {videoURL && externalUrl.includes('you') && (
          <meta
            itemProp="embedURL"
            content={`https://youtube.googleapis.com/v/${videoURL}`}
          />
        )}
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
    bottomText: PropTypes.object,
    metaDescription: PropTypes.string,
    externalUrl: PropTypes.string.isRequired,
    removeMarginBottom: PropTypes.bool,
  }),
}

export default VideoEmbed
