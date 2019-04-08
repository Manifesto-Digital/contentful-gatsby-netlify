import React from 'react';
import PropTypes from 'prop-types';
import { VisuallyHidden } from '../../../styled/accessibility';
import MagGlass from '../../../../assets/svg/icons/search-light.svg';
import {
  FormWrapper,
  InputWrap,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './styles';

const SearchBar = ({ resolution, searchFocus }) => {
  const placeholder = 'Search within Legal';
  console.log('resolution', resolution);

  return (
    <FormWrapper
      resolution={resolution}
      role="search"
      action="/search"
      method="get"
    >
      <VisuallyHidden as="legend">Search within Legal</VisuallyHidden>
      <InputWrap>
        <SearchIcon src={MagGlass} cacheGetRequests />
        <SearchInput
          ref={input => input && searchFocus && input.focus()}
          name="search"
          id="search"
          placeholder={placeholder}
          type="search"
        />
        <SearchButton type="submit">Search</SearchButton>
      </InputWrap>
    </FormWrapper>
  );
};

SearchBar.propTypes = {
  resolution: PropTypes.string.isRequired,
  searchFocus: PropTypes.bool,
};

export default SearchBar;
