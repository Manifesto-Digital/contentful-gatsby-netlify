import { graphql } from 'gatsby';

export const Testimonials = graphql`
  fragment TestimonialsAssemblyFragment on ContentfulAssemblyTestimonials {
    id
    internal {
      type
    }
    headerText
    testimonials {
      ...TestimonialTopicFragment
    }
  }
`;
