import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

import LinkHandler from '../link-handler';

import { VisuallyHidden } from '../styled/accessibility';

const ButtonWrapper = styled(LinkHandler)``;

const PaginationButton = () => (
  <ButtonWrapper>
    <VisuallyHidden>Go to </VisuallyHidden>1
  </ButtonWrapper>
);

const Items = props => (
  <li>
    <LinkHandler internalLink={props}>
      <VisuallyHidden>page </VisuallyHidden>1
    </LinkHandler>
  </li>
);

const Pagination = () => (
  <nav aria-label="pagination">
    <ul>
      <li>
        <PaginationButton goTo="previous" />
      </li>

      <Items number={6} />

      <li>
        <PaginationButton goTo="next" />
      </li>
    </ul>
  </nav>
);

// Items.propTypes = {
//   props: PropTypes.object,
// };

// PaginationButton.propTypes = {
//   goTo: PropTypes.string,
// };

export default Pagination;
