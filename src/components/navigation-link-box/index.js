import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '../styled/containers'
import { Wrapper, ListWrapper, StyledLink } from './styles'

const NavigationLinkBox = ({ data }) => {
  const { headerText, links } = data
  return (
    <Container>
      <Wrapper>
        <h2>{headerText}</h2>
        <ListWrapper>
          {links.map((link, i) => (
            <StyledLink key={i} to={link.slug}>
              {link.title}
            </StyledLink>
          ))}
        </ListWrapper>
      </Wrapper>
    </Container>
  )
}

NavigationLinkBox.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      })
    ),
  }),
}

export default NavigationLinkBox
