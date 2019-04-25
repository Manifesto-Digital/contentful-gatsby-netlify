import { graphql } from 'gatsby';

export const TestimonialComponentFragment = graphql`
  fragment TestimonialComponentFragment on ContentfulDataTestimonial {
    id
    internal {
      type
    }
    image {
      ...ImageFragment
    }
    text {
      json
    }
    author
    backgroundColour
  }
`;
