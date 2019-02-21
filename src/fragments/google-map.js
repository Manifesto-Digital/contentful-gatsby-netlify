import { graphql } from 'gatsby';

export const GoogleMapFragment = graphql`
  fragment GoogleMapFragment on ContentfulTopicGoogleMap {
    id
    internal {
      type
    }
    headerText
    displaySearch
    locations {
      location {
        lon
        lat
      }
      address
    }
  }
`;
