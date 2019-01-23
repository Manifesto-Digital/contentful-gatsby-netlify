import React from 'react';
import PropTypes from 'prop-types';

import LinkHandler from '../link-handler';

import { VisuallyHidden } from '../styled/accessibility';

/*
 * Working with this as a guide:
 * https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination
 */

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  console.log({ isFirst, isLast, prevPage, nextPage });

  return (
    <nav aria-label="pagination">
      <ul>
        {!isFirst && (
          <li key="pagination-prev">
            <LinkHandler internalLink={nextPage} rel="next">
              <VisuallyHidden>Previous Page</VisuallyHidden> ←
            </LinkHandler>
          </li>
        )}

        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <LinkHandler internalLink={`/${i === 0 ? '' : i + 1}`}>
              {i + 1}
            </LinkHandler>
          </li>
        ))}

        {!isLast && (
          <li key="pagination-next">
            <LinkHandler internalLink={nextPage} rel="next">
              <VisuallyHidden>Next Page</VisuallyHidden> →
            </LinkHandler>
          </li>
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  numPages: PropTypes.number,
};

export default Pagination;
