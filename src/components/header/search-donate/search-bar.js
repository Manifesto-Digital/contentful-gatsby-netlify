import React from 'react';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '../../styled/accessibility';
import MagGlass from '../../../assets/svg/icons/search-light.svg';
import {
  FormWrapper,
  InputWrap,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './styles';

const SearchBar = ({ resolution, searchFocus }) => {
  const placeholder = 'Search this site...';
  console.log('resolution', resolution);

  return (
    <FormWrapper
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
    </FormWrapper>
  );
};

SearchBar.propTypes = {
  resolution: PropTypes.string.isRequired,
  searchFocus: PropTypes.bool,
};

export default SearchBar;
