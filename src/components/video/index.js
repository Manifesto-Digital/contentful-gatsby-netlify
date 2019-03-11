import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import RichText from '../rich-text';
import { Wrapper, VideoWrapper, BottomText } from './styles';
import { Container } from '../styled/containers';

const VideoEmbed = ({ data, insideContainer }) => {
  const {
    externalUrl,
    title,
    bottomText,
    removeMarginBottom,
    metaDescription,
  } = data;

  const options = {
    youtube: {
      playerVars: {
        controls: 1,
        autoplay: 0,
        modestbranding: 1,
      },
    },
  };

  return (
    <Container padding={!insideContainer}>
      <Wrapper removeMarginBottom={removeMarginBottom}>
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
    </Container>
  );
};

VideoEmbed.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    bottomText: PropTypes.object,
    metaDescription: PropTypes.string,
    externalUrl: PropTypes.string.isRequired,
    removeMarginBottom: PropTypes.bool,
  }),
  insideContainer: PropTypes.bool,
};

VideoEmbed.defaultProps = {
  insideContainer: false,
};

export default VideoEmbed;
