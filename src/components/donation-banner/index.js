import React from 'react';
import PropTypes from 'prop-types';
// Components
import DonationForm from './donation-form';
// Styles
import { Container } from '../styled/containers';
import { Banner, Wrapper, Header } from './styles';

const DonationBanner = ({ banner }) => {
  const { headerText, removeMarginBottom, donationInputDefaultValue } = banner;

  return (
    <Banner removeMarginBottom={removeMarginBottom}>
      <Container>
        <Wrapper>
          <Header>{headerText}</Header>
          <DonationForm defaultDonationValue={donationInputDefaultValue} />
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
