import { graphql } from 'gatsby';

export const ShopComponentFragment = graphql`
  fragment ShopComponentFragment on ContentfulDataShop {
    id
    internal {
      type
    }
    type
    location {
      lon
      lat
    }
    displayAddress {
      childContentfulRichText {
        html
      }
    }
    shortAddress
    region
    contactNumber
    contactEmail
    openingHours {
      childContentfulRichText {
        html
      }
    }
    parkingInformation {
      childContentfulRichText {
        html
      }
    }
    disabledAccessInformation {
      childContentfulRichText {
        html
      }
    }
  }
`;
