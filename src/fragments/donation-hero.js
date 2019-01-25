import { graphql } from 'gatsby';

export const DonationHeroFragment = graphql`
  fragment DonationHeroFragment on ContentfulTopicDonationHero {
    id
    internal {
      type
    }
    heading
    singleAmount1
    singleDescription1
    singleImage1 {
      ...ImageFragment
    }
    singleAmount2
    singleDescription2
    singleImage2 {
      ...ImageFragment
    }

    singleAmount3
    singleDescription3
    singleImage3 {
      ...ImageFragment
    }

    singleAmount4
    singleDescription4
    singleImage4 {
      ...ImageFragment
    }

    singleAmount5
    singleDescription5
    singleImage5 {
      ...ImageFragment
    }

    monthlyAmount1
    monthlyDescription1
    monthlyImage1 {
      ...ImageFragment
    }

    monthlyAmount2
    monthlyDescription2
    monthlyImage2 {
      ...ImageFragment
    }
    monthlyAmount3
    monthlyDescription3
    monthlyImage3 {
      ...ImageFragment
    }

    monthlyAmount4
    monthlyDescription4
    monthlyImage4 {
      ...ImageFragment
    }
  }
`;
