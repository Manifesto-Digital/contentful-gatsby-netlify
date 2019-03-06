import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Container } from '../styled/containers';
import { Header, Wrapper, StyledLinkHandler } from './styles';

const Banner = ({ banner }) => {
  const {
    headerText,
    bannerColour,
    linkText,
    internalLink,
    externalLink,
    removeMarginBottom,
  } = banner;

  return (
    <Wrapper
      bg={bannerColour.toLowerCase()}
      removeMarginBottom={removeMarginBottom}
    >
      <Container>
        <Header bg={bannerColour.toLowerCase()}>{headerText}</Header>
        <StyledLinkHandler
          externalUrl={externalLink.URL}
          internalLink={internalLink}
          bg={bannerColour.toLowerCase()}
          newTab={externalLink.newTab}
        >
          {linkText}
        </StyledLinkHandler>
      </Container>
    </Wrapper>
  );
};
Banner.propTypes = {
  banner: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    bannerColour: PropTypes.oneOf(['Red', 'San Marino Blue', 'Black'])
      .isRequired,
    linkText: PropTypes.string.isRequired,
    internalLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
    externalUrl: PropTypes.string,
    removeMarginBottom: PropTypes.bool,
  }),
};

export default Banner;
