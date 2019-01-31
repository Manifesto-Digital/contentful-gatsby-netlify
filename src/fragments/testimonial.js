import { graphql } from 'gatsby';

export const Testimonials = graphql`
  fragment TestimonialTopicFragment on ContentfulTopicTestimonial {
    id
    internal {
      type
    }
    image {
      ...ImageFragment
    }
    text {
      childContentfulRichText {
        html
      }
    }
    author
  }
`;
