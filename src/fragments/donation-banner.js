import { graphql } from 'gatsby';

export const DonationBanner = graphql`
  fragment DonationBanner on ContentfulComponentDonationBanner {
    id
    name
    internal {
      type
    }
    headerText
    donationInputDefaultValue
    removeMarginBottom
  }
`;
