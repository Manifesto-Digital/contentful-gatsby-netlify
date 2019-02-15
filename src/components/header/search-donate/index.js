import React from 'react';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '../../styled/accessibility';
import MagGlass from '../../../assets/svg/icons/search-light.svg';
import {
  Wrapper,
  InputWrap,
  SearchInput,
  SearchButton,
  SearchIcon,
  DonateButton,
} from './styles';

const SearchDonate = ({ resolution, searchFocus }) => {
  const placeholder = 'Search this site...';
  return (
    <Wrapper
      resolution={resolution}
      role="search"
      action="/search"
      method="get"
    >
      <VisuallyHidden as="legend">Search this site</VisuallyHidden>
      <InputWrap>
        <SearchInput
          ref={input => input && searchFocus && input.focus()}
          name="search"
          id="search"
          placeholder={placeholder}
          type="search"
        />
        <SearchButton type="submit">
          <SearchIcon src={MagGlass} cacheGetRequests />
        </SearchButton>
      </InputWrap>
      <DonateButton internalLink={{ slug: 'donate' }} bg="donate">
        Donate
        <VisuallyHidden as="legend">Donate</VisuallyHidden>
      </DonateButton>
    </Wrapper>
  );
};

SearchDonate.propTypes = {
  resolution: PropTypes.string.isRequired,
  searchFocus: PropTypes.bool,
};

export default SearchDonate;
