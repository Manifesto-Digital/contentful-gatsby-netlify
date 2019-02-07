import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
// Styles
import { Container } from '../styled/containers';
import {
  Banner,
  StyledButton,
  Wrapper,
  Header,
  StyledDonationFormHandler,
} from './styles';
// Components
import DonationInput from '../form-elements/donation-input';
// Styles
import { VisuallyHidden } from '../styled/accessibility';

const DonationBanner = ({ banner }) => {
  const { headerText, removeMarginBottom, donationInputDefaultValue } = banner;

  return (
    <Banner removeMarginBottom={removeMarginBottom}>
      <Container>
        <Wrapper>
          <Header>{headerText}</Header>
          <StyledDonationFormHandler
            defaultDonationValue={donationInputDefaultValue}
            render={({ handleAmountChange, setFieldValue, defaultValue }) => (
              <>
                <VisuallyHidden as="label" htmlFor="amount-holder">
                  Donate
                </VisuallyHidden>
                <Field
                  name="amount-holder"
                  render={props => (
                    <DonationInput
                      noMargin
                      inline
                      placeholder={defaultValue.toString()}
                      {...props}
                      id="amount-holder"
                      onChange={e => handleAmountChange(e, setFieldValue)}
                    />
                  )}
                />
                <StyledButton bg="white-outline" type="submit">
                  Donate
                </StyledButton>
              </>
            )}
          />
        </Wrapper>
      </Container>
    </Banner>
  );
};
DonationBanner.propTypes = {
  banner: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    removeMarginBottom: PropTypes.bool,
    donationInputPlaceholder: PropTypes.number,
  }),
};

export default DonationBanner;
