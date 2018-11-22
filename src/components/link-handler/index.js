import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
 * If both internal and external links provided internal is chosen
 *
 */
const LinkHandler = ({ internalLink, externalUrl, text, Styled, ...props }) => {
  if (internalLink) {
    return (
      <>
        {Styled ? (
          <Styled as={Link} to={internalLink.slug} {...props}>
            {text}
          </Styled>
        ) : (
          <Link to={internalLink.slug} {...props}>
            {text}
          </Link>
        )}
      </>
    )
  }
  if (externalUrl) {
    return (
      <>
        {Styled ? (
          <Styled as={Link} to={internalLink.slug} {...props}>
            {text}
          </Styled>
        ) : (
          <a href={externalUrl} {...props}>
            {text}
          </a>
        )}
      </>
    )
  }
  return null
}

LinkHandler.propTypes = {
  text: PropTypes.string,
  externalUrl: PropTypes.string,
  internalLink: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
  }),
  styled: PropTypes.func,
}

export default LinkHandler
