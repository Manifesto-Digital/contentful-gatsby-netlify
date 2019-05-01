import { graphql } from 'gatsby';

export const ctaStandardFragment = graphql`
  fragment ctaStandardFragment on ContentfulComponentStandardCta {
    id
    name
    ctaColour
    link {
      ...LinkFragment
    }
    buttonText
  }
`;

export const ctaWithIconFragment = graphql`
  fragment ctaWithIconFragment on ContentfulComponentCtaWithIcon {
    id
    name
    ctaColour
    link {
      ...LinkFragment
    }
    buttonText
    icon {
      id
      file {
        url
        fileName
        contentType
      }
    }
  }
`;
