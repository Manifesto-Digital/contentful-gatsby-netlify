import { graphql } from 'gatsby'

export const DonationBanner = graphql`
  fragment DonationBanner on ContentfulTopicDonationBanner {
    id
    name
    internal {
      type
    }
    headerText
    donationInputPlaceholder
    removeMarginBottom
  }
`
