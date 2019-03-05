import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import Spinner from '../../assets/svg/spinner.svg';
import { useApi } from '../../utils/useApi';
import LinkHandler from '../link-handler';
import RichText from '../rich-text';
import { VisuallyHidden } from '../styled/accessibility';
import { Container } from '../styled/containers';
import {
  IntroWrapper,
  Results,
  ResultsList,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchWrapper,
  SpinnerSVG,
  StatusMessage,
} from './styles';

const Finder = memo(({ data, insideContainer, type }) => {
  const { titleText, introText } = data;
  const [query, setQuery] = useState('');
  const [searchedFor, setSearchedFor] = useState('');
  const { response, isLoading, isError, getResponse } = useApi({
    response: [],
  });
  const API_KEY = process.env.SEARCH_KEY;
  const SEARCH_ENDPOINT = `https://staging.services.shelter.org.uk/api/v1/location/${query}?api_token=${API_KEY}`;

  const clearInput = target => {
    target.value = '';
  };

  return (
    <Container padding={!insideContainer}>
      <IntroWrapper>
        <h1>{titleText}</h1>
        {introText && <RichText richText={introText} />}
      </IntroWrapper>
      <h2>Where are you?</h2>
      <p>Your postcode or town</p>
      <SearchForm
        role="search"
        isLoading={!isLoading && !isError}
        onSubmit={event => {
          setSearchedFor(query);
          getResponse(event, SEARCH_ENDPOINT);
        }}
      >
        <SearchWrapper>
          <VisuallyHidden as="label" htmlFor="search-input">
            {`Search for ${type}`}
          </VisuallyHidden>
          <SearchInput
            type="text"
            data-testid="search-input"
            name="search-input"
            value={query}
            onChange={event => setQuery(event.target.value)}
            onFocus={event => clearInput(event.target)}
          />
          <SearchButton bg="blue" type="submit" disabled={isLoading}>
            <VisuallyHidden>Submit Search</VisuallyHidden>
            Find
          </SearchButton>
        </SearchWrapper>
        <StatusMessage>
          {isError && (
            <p>
              Sorry, we couldn't find any results based on your search, please
              try again
            </p>
          )}
          {isLoading && <SpinnerSVG src={Spinner} cacheGetRequests />}
        </StatusMessage>
      </SearchForm>

      {!isLoading && !isError && response.data && (
        <Results data-testid="results" isLoading={!isLoading}>
          <h2>{`The nearest ${type} to ${searchedFor} are:`}</h2>
          <ResultsList data-testid="results-list">
            {response.data.agencies.data.map((result, i) => {
              if (i > 2) return;
              return (
                <li key={result.id}>
                  <LinkHandler externalUrl={result.Website}>
                    {result.Name}
                  </LinkHandler>
                  <p>
                    <small>
                      {result.distance_in_miles.toFixed(1)} miles away
                    </small>
                  </p>
                </li>
              );
            })}
          </ResultsList>
        </Results>
      )}
    </Container>
  );
});

Finder.propTypes = {
  data: PropTypes.shape({
    titleText: PropTypes.string,
    introText: PropTypes.object,
  }),
  insideContainer: PropTypes.bool,
  type: PropTypes.string,
};

export default Finder;
