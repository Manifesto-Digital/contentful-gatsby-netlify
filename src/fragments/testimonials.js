import { graphql } from 'gatsby';

export const TestimonialsAssemblyFragment = graphql`
  fragment TestimonialsAssemblyFragment on ContentfulAssemblyTestimonials {
    id
    internal {
      type
    }
    headerText
    testimonials {
      ...TestimonialComponentFragment
    }
  }
`;
