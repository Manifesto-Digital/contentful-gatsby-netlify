import { graphql } from 'gatsby';

export const ShopTopicFragment = graphql`
  fragment ShopTopicFragment on ContentfulTopicShop {
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
