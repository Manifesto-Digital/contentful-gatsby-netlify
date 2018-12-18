import React from 'react'
import PropTypes from 'prop-types'
// Components
import LinkHandler from '../link-handler'
// Styles
import { Container } from '../styled/containers'
import { Header, Wrapper, LinkText } from './styles'

const Banner = ({ banner }) => {
  const {
    headerText,
    bannerColour,
    linkText,
    internalLink,
    externalUrl,
    removeMarginBottom,
  } = banner
  return (
    <Wrapper
      bg={bannerColour.toLowerCase()}
      removeMarginBottom={removeMarginBottom}
    >
      <Container>
        <Header bg={bannerColour.toLowerCase()}>{headerText}</Header>
        <LinkHandler
          externalUrl={externalUrl}
          internalLink={internalLink}
          Styled={LinkText}
          bg={bannerColour.toLowerCase()}
        >
          {linkText}
        </LinkHandler>
      </Container>
    </Wrapper>
  )
}
Banner.propTypes = {
  banner: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    bannerColour: PropTypes.oneOf(['Red', 'Green', 'Blue', 'Black']).isRequired,
    linkText: PropTypes.string.isRequired,
    internalLink: PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
    externalUrl: PropTypes.string,
    removeMarginBottom: PropTypes.bool,
  }),
}

export default Banner
