import { graphql } from 'gatsby';

export const ServiceComponentFragment = graphql`
  fragment ServiceComponentFragment on ContentfulDataService {
    id
    internal {
      type
    }
    serviceName
    contactNumber1
    contactNumber1Text
    contactNumber2
    contactNumber2Text
    searchLocation {
      lon
      lat
    }
    displaySpecificLocation
    mondayOpeningTimes
    tuesdayOpeningTimes
    wednesdayOpeningTimes
    thursdayOpeningTimes
    fridayOpeningTimes
    saturdayOpeningTimes
    sundayOpeningTimes
  }
`;
