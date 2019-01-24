import React from 'react';
import PropTypes from 'prop-types';

// Components
import PaginationLink from './link';
// Styles
import { Container, TwoThirds } from '../../styled/containers';
import { Wrapper } from './styles';

const SubpagePagination = ({ subpages, activeSlug }) => {
  if (!subpages) return null;
  const { pages } = subpages;

  // Find the index for the active page in the subpage list
  const activeIndex = pages.findIndex(page => page.slug === activeSlug);

  if (activeIndex === -1) {
    return null;
  }

  const hasPrev = typeof pages[activeIndex - 1] !== 'undefined';
  const hasNext = typeof pages[activeIndex + 1] !== 'undefined';

  return (
    <Container>
      <TwoThirds padding={false}>
        <Wrapper>
          {hasPrev && (
            <PaginationLink
              title="Prev"
              type="prev"
              linkData={pages[activeIndex - 1]}
            />
          )}
          {hasNext && (
            <PaginationLink
              title="Next"
              type="next"
              linkData={pages[activeIndex + 1]}
            />
          )}
        </Wrapper>
      </TwoThirds>
    </Container>
  );
};

SubpagePagination.propTypes = {
  activeSlug: PropTypes.string,
  subpages: PropTypes.object,
};

export default SubpagePagination;
