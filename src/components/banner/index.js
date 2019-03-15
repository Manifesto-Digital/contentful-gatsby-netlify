import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
// Styles
import { Container } from '../styled/containers';
import { Header, Wrapper, StyledLinkHandler } from './styles';

const Banner = ({ banner, sidebar }) => {
  const {
    headerText,
    bannerColour,
    linkText,
    link,
    removeMarginBottom,
  } = banner;

  return (
    <Wrapper
      bg={consistentString(bannerColour)}
      removeMarginBottom={removeMarginBottom}
      sidebar={sidebar}
    >
      <Container>
        <Header as={sidebar ? 'h3' : 'h2'} bg={consistentString(bannerColour)}>
          {headerText}
        </Header>
        {link && (
          <StyledLinkHandler link={link} bg={bannerColour.toLowerCase()}>
            {linkText}
          </StyledLinkHandler>
        )}
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
  sidebar: PropTypes.bool,
};

export default Banner;
