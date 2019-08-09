import React from 'react';
import PropTypes from 'prop-types';
// Components
import ResponsiveImage from '../image/responsive';
// Styles
import {
  HeroWithCard,
  CardContent,
  Title,
  CardSubtitle,
  WithCardMedia,
  StyledLinkHandler,
} from './styles';
import { Container } from '../styled/containers';

const Hero = ({ content }) => {
  const { image, title, subtitle, cardPosition, linkText, link } = content;

  return (
    <HeroWithCard>
      <WithCardMedia>
        {image && (
          <ResponsiveImage mobileW={800} desktopW={1600} image={image} />
        )}
      </WithCardMedia>
      <Container padding={false}>
        <CardContent position={cardPosition && cardPosition.toLowerCase()}>
          <Title>{title}</Title>
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
          {link && linkText && (
            <StyledLinkHandler link={link}>{linkText}</StyledLinkHandler>
          )}
        </CardContent>
      </Container>
    </HeroWithCard>
  );
};

Hero.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    cardPosition: PropTypes.oneOf(['Left', 'Right']),
    linkText: PropTypes.string,
    link: PropTypes.object,
    image: PropTypes.object,
  }),
};

export default Hero;
