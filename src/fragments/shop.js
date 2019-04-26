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
