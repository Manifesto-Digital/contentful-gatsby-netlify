import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import MagGlass from '../../assets/svg/icons/search-light.svg';
import { AdviceSearchForm, SearchInput, SearchButton } from './styles';

import { VisuallyHidden } from '../styled/accessibility';

const AdviceSearchBox = ({ data }) => {
  const { headerText, placeholder } = data;
  const country = data.collectionToSearch.toLowerCase();

  return (
    <Formik
      initialValues={{ collection: `shelter-${country}` }}
      validationSchema={Yup.object({
        query: Yup.string(),
      })}
    >
      {({ submitForm }) => (
        <AdviceSearchForm
          as={Form}
          onSubmit={submitForm}
          action={`https://${country}.shelter.org.uk/search`}
          method="GET"
        >
          <fieldset>
            <h3>{headerText}</h3>

            <VisuallyHidden as="legend">
              Search our website by keyword
            </VisuallyHidden>

            <VisuallyHidden as="label" htmlFor="searchTerm">
              Enter your search term
            </VisuallyHidden>

            <Field
              name="query"
              render={props => (
                <SearchInput
                  id="searchTerm"
                  placeholder={placeholder || 'Search topics'}
                  type="search"
                  {...props}
                />
              )}
            />

            <Field type="hidden" name="collection" />

            <Field
              type="hidden"
              name={country === 'england' ? 'type' : 'meta_A'}
              value="Advice"
            />

            <SearchButton name="Search" type="submit" bg="blue" icon={MagGlass}>
              Search
            </SearchButton>
          </fieldset>
        </AdviceSearchForm>
      )}
    </Formik>
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
