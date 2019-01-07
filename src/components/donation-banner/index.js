import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { Container } from '../styled/containers'
import { Banner, Wrapper, Header, FormWrapper, Button } from './styles'

const DonationBanner = ({ banner }) => {
  const { headerText, removeMarginBottom, donationInputPlaceholder } = banner

  return (
    <Banner removeMarginBottom={removeMarginBottom}>
      <Container>
        <Wrapper>
          <Header>{headerText}</Header>
          <FormWrapper>
            <form>
              <input
                type="text"
                placeholder={donationInputPlaceholder || '30'}
              />
              <Button type="submit">Donate</Button>
            </form>
          </FormWrapper>
        </Wrapper>
      </Container>
    </Banner>
  )
}
DonationBanner.propTypes = {
  banner: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    removeMarginBottom: PropTypes.bool,
    donationInputPlaceholder: PropTypes.number,
  }),
}

export default DonationBanner
