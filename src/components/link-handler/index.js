import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
 * If both internal and external links provided, internal is chosen
 * Internal link uses Gatsby Link
 *
 */
const LinkHandler = ({ internalLink, externalUrl, className, children }) => {
  if (internalLink) {
    return (
      <Link to={internalLink.slug} className={className}>
        {children}
      </Link>
    )
  }
  if (externalUrl) {
    return (
      <a href={externalUrl} className={className}>
        {children}
      </a>
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
}

export default LinkHandler
