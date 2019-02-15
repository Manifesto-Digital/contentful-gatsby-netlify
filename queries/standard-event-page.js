const getStandardEventPages = async graphql =>
  graphql(`
    {
      allContentfulPageAssemblyStandardEvent {
        edges {
          node {
            slug
            event {
              # TODO: Change this to use the Event fragment when it's implemented
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
            mainCtaText
            mainCtaMethod
            mainCtaLink
            displayMap
            signUpTextLeft {
              childContentfulRichText {
                html
              }
            }
            signUpTextRight {
              childContentfulRichText {
                html
              }
            }
            bodyCopy {
              childContentfulRichText {
                html
              }
            }
            #registerInterestForm {
            #  ...AssemblyFormFragment
            #}
            #signUpForm {
            #  ...AssemblyFormFragment
            #}
            #waitingListForm {
            #  ...AssemblyFormFragment
            #}
            #modules { - Not sure what this will be yet
            #  ...Module
            #}
            sidebarCards {
              cards {
                id
                slug
              }
            }
          }
        }
      }
    }
  `);

module.exports = { getStandardEventPages };
