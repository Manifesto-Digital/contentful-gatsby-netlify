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
      json
    }
    shortAddress
    region
    contactNumber
    contactEmail
    openingHours {
      json
    }
    parkingInformation {
      json
    }
    disabledAccessInformation {
      json
    }
  }
`;
