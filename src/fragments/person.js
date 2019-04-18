import { graphql } from 'gatsby';

export const PersonFragment = graphql`
  fragment PersonFragment on ContentfulTopicPerson {
    id
    firstName
    lastName
    phoneNumber
    emailAddress
    category
    photo {
      title
    }
    bio {
      internal {
        content
      }
    }
    jobTitle
    photo {
      ...ImageFragment
    }
    page___person_ {
      slug
    }
  }
`;
