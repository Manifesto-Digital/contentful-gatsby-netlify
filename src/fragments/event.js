import { graphql } from 'gatsby';

export const EventFragment = graphql`
  fragment EventFragment on ContentfulTopicEvent {
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
