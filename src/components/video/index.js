import React from 'react'
import ReactPlayer from 'react-player'
import theme from '../theme/variables'
import * as S from './styles'

function createMarkup(markupToRender) {
  return { __html: markupToRender }
}

/* eslint-disable */
const VideoEmbed = ({ data }) => {
  const { externalUrl, title, bottomText, removeMarginBottom, createdAt } = data
  const metaDescription = bottomText.content[0].content[0].value

  const opts = {
    youtube: {
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
      },
    },
  }

  return (
    <S.Wrapper theme={theme} removeMarginBottom={removeMarginBottom}>
      <h3>{title}</h3>
      <S.VideoWrapper>
        <ReactPlayer
          url={externalUrl}
          config={{ ...opts }}
          width="100%"
          height="100%"
          preload="true"
        />
        <meta itemProp="name" content={title} />
        <meta
          itemProp="description"
          content={metaDescription ? metaDescription : title}
        />
        <meta itemProp="uploadDate" content={createdAt} />
        <meta itemProp="embedUrl" content={externalUrl} />
      </S.VideoWrapper>
      <S.BottomText
        dangerouslySetInnerHTML={createMarkup(
          bottomText.childContentfulRichText.html
        )}
      />
    </S.Wrapper>
  )
}
/* eslint-enable */
export default VideoEmbed
