import React from 'react';
import PropTypes from 'prop-types';
import { AdviceSearchForm, SearchInput, SearchButton } from './styles';
import { VisuallyHidden } from '../styled/accessibility';

const AdviceSearchBox = ({ data }) => {
  const { headerText, placeholder } = data;
  const country = data.collectionToSearch.toLowerCase();

  return (
    <AdviceSearchForm
      method="GET"
      action={`https://${country}.shelter.org.uk/search`}
    >
      <h3>{headerText}</h3>

      <fieldset>
        <VisuallyHidden as="legend">
          Search our website by keyword
        </VisuallyHidden>

        <SearchInput
          placeholder={placeholder || 'Search topics'}
          type="search"
          name="query"
          aria-label="Search"
          autoComplete="off"
        />

        <input type="hidden" name="collection" value={`shelter-${country}`} />

        <input
          type="hidden"
          name={country === 'england' ? 'type' : 'meta_A'}
          value="Advice"
        />

        <SearchButton name="Search" type="submit" bg="blue">
          Search
          <i className="fa fa-search button__search--icon" aria-hidden="true" />
        </SearchButton>
      </fieldset>
    </AdviceSearchForm>
  );
};

AdviceSearchBox.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    collectionToSearch: PropTypes.string.isRequired,
  }),
};

export default AdviceSearchBox;
