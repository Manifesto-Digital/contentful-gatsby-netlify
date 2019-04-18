import { graphql } from 'gatsby';

export const GoogleMapFragment = graphql`
  fragment GoogleMapFragment on ContentfulComponentGoogleMap {
    id
    internal {
      type
    }
    headerText
    locations {
      location {
        lon
        lat
      }
      address
    }
  }
`;
