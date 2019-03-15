import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  VideoHero,
  Video,
  ImageFallback,
  TitleWrapper,
  Title,
  Subtitle,
  Red,
  HeroBanner,
  ContentContainer,
  BannerText,
} from './styles';
import { SignUpLink } from '../../styled/buttons';
import { Container } from '../../styled/containers';

const Hero = ({
  image,
  video,
  title,
  subtitle,
  buttonText,
  bannerText,
  eventLink,
  heroBannerRef,
}) => {
  // Last word in title will be wrapped to emphasize
  const wrapTitle = () => {
    const splitString = title.split(' ');
    // If only one word return

    if (splitString.length === 1) return title;
    const lastWordInTitle = splitString.pop();
    const startOfTitle = splitString.join(' ');

    return (
      <>
        {startOfTitle} <Red>{lastWordInTitle}</Red>
      </>
    );
  };

  const [error, setError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <VideoHero>
      <Video
        url={video.file.url}
        muted
        loop
        playing
        autoPlay
        playsinline
        onReady={() => setVideoLoaded(true)}
        width={null}
        height={null}
        onError={e => {
          // On error fires on load, check that there is an actual error
          if (e.target.error) setError(true);
        }}
        config={{
          file: {
            attributes: {
              style: {
                width: 'auto',
                height: 'auto',
              },
              poster: 'data:image/gif,AAAA',
            },
          },
        }}
      />
      {(error || !videoLoaded) && image && (
        <ImageFallback bgImage={image.file.url} />
      )}
      <TitleWrapper>
        <Title>{wrapTitle()}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
      <HeroBanner ref={heroBannerRef}>
        <ContentContainer>
          <BannerText>{bannerText}</BannerText>
          <SignUpLink link={eventLink}>{buttonText}</SignUpLink>
        </ContentContainer>
      </HeroBanner>
      <Container />
    </VideoHero>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bannerText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  eventLink: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  image: PropTypes.object,
  video: PropTypes.object,
  heroBannerRef: PropTypes.object,
};

export default Hero;
