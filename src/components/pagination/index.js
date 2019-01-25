import React from 'react';
import PropTypes from 'prop-types';
import ArrowRight from '../../assets/svg/icons/chevron-right.svg';
import ArrowLeft from '../../assets/svg/icons/chevron-left.svg';
// Styles
import { VisuallyHidden } from '../styled/accessibility';
import { UnorderedList, ListItem, SVGIcon, Link } from './styles';

const Pagination = ({ pageContext: { currentPage, numPages }, slug }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const pagesArray = Array.from({ length: numPages }, (_i, i) => i);

  // If there are not 3 previous then start slice from 0
  const previous3Pages = pagesArray.slice(
    currentPage - 3 >= 0 ? currentPage - 3 : 0,
    currentPage - 1
  );
  const next3Pages = pagesArray.slice(currentPage, currentPage + 3);

  // Make sure we don't generate a link of /0 or /1
  const generateInternalLink = i => {
    if (i < 2) return { slug };
    return { slug: `${slug}/${i}` };
  };
  return (
    <nav aria-label="pagination">
      <UnorderedList>
        <ListItem key="pagination-prev" previous>
          <Link
            disabled={isFirst}
            internalLink={generateInternalLink(currentPage - 1)}
          >
            <VisuallyHidden>Previous Page</VisuallyHidden>
            <SVGIcon src={ArrowLeft} />
          </Link>
        </ListItem>

        {/* Previous 3 pagination options */}
        {previous3Pages.map(i => (
          <ListItem key={`pagination-number${i + 1}`}>
            <Link internalLink={generateInternalLink(i + 1)}>{i + 1}</Link>
          </ListItem>
        ))}

        {/* Active page */}
        <ListItem active>{currentPage}</ListItem>

        {/* Next 3 pagination options */}
        {next3Pages.map(i => (
          <ListItem key={`pagination-number${i + 1}`}>
            <Link internalLink={generateInternalLink(i + 1)}>{i + 1}</Link>
          </ListItem>
        ))}

        <ListItem key="pagination-next">
          <Link
            disabled={isLast}
            internalLink={generateInternalLink(currentPage + 1)}
            next
          >
            <VisuallyHidden>Next Page</VisuallyHidden>
            <SVGIcon src={ArrowRight} />
          </Link>
        </ListItem>
      </UnorderedList>
    </nav>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
  slug: PropTypes.string.isRequired,
};

export default Pagination;
