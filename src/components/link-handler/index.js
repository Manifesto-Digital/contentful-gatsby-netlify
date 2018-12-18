import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
 * If both internal and external links provided, internal is chosen
 * Internal link uses Gatsby Link
 *
 */
const LinkHandler = ({ internalLink, externalUrl, Styled, ...props }) => {
  if (internalLink) {
    return (
      <>
        {Styled ? (
          <Styled as={Link} to={internalLink.slug} {...props}>
            {props.children}
          </Styled>
        ) : (
          <Link to={internalLink.slug} {...props}>
            {props.children}
          </Link>
        )}
      </>
    )
  }
  if (externalUrl) {
    return (
      <>
        {Styled ? (
          <Styled href={externalUrl} {...props}>
            {props.children}
          </Styled>
        ) : (
          <a href={externalUrl} {...props}>
            {props.children}
          </a>
        )}
      </>
    )
  }
  return null
}

LinkHandler.propTypes = {
  externalUrl: PropTypes.string,
  internalLink: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
  }),
  styled: PropTypes.func,
}

export default LinkHandler
