import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

/**
 * Both internal and external links are references to content
 *
 */
const LinkHandler = ({ className, children, link, internalLink = false }) => {
  if (!link && !internalLink) return null; // Is a multi ref that will only ever allow 1
  const linkRef = Array.isArray(link) ? link[0] : internalLink || link;

  if (
    linkRef.internal &&
    !internalLink &&
    linkRef.internal.type === 'ContentfulTopicExternalLink'
  ) {
    const { URL, newTab } = linkRef;
    return (
      <a
        href={URL}
        className={className}
        rel="noopener"
        target={newTab ? '_blank' : '_self'}
      >
        {children}
      </a>
    );
  }
  if (linkRef.slug) {
    return (
      <Link to={`/${linkRef.slug}`} className={className}>
        {children}
      </Link>
    );
  }
  return null;
};

LinkHandler.propTypes = {
  link: PropTypes.oneOfType([
    // Ref of links that may be internal or external
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        // External
        PropTypes.shape({
          internal: PropTypes.shape({
            type: PropTypes.string.isRequired,
          }).isRequired,
          URL: PropTypes.string.isRequired,
          newTab: PropTypes.bool,
        }),
        // Internal
        PropTypes.shape({
          internal: PropTypes.shape({
            type: PropTypes.string.isRequired,
          }).isRequired,
          slug: PropTypes.string,
        }),
      ])
    ),

    PropTypes.shape({
      internal: PropTypes.shape({
        type: PropTypes.string.isRequired,
      }).isRequired,
      slug: PropTypes.string,
    }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  internalLink: PropTypes.shape({
    slug: PropTypes.string,
  }),
};

export default LinkHandler;
