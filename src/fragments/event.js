import { graphql } from 'gatsby';

export const EventFragment = graphql`
  fragment EventFragment on ContentfulDataEvent {
    id
    eventName
    shortDescription
    thumbnailImage {
      file {
        url
        fileName
      }
      description
    }
    link {
      ...LinkFragment
    }
    eventType
    eventStatus
    eventSystemDate
    eventDisplayDate
    distance
    registrationFee
    pledge
    eventLocation {
      lat
      lon
    }
    displayLocation
    notifiedTeamEmail
  }
`;
