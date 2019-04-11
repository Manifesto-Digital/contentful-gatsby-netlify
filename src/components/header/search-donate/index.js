import React from 'react';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '../../styled/accessibility';
import { DonateButton } from './styles';
import SearchBar from './search-bar';

const SearchDonate = ({ resolution, searchFocus }) => (
  <>
    <SearchBar resolution={resolution} searchFocus={searchFocus} />
    <DonateButton
      internalLink={{ slug: 'donate' }}
      bg="donate"
      resolution={resolution}
    >
      Donate
      <VisuallyHidden as="legend">Donate</VisuallyHidden>
    </DonateButton>
  </>
);

SearchDonate.propTypes = {
  resolution: PropTypes.string.isRequired,
  searchFocus: PropTypes.bool,
};

export default SearchDonate;
