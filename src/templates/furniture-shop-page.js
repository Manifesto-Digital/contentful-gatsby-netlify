import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// Components
import ShopHero from '../components/shop-furniture/hero';
import CenteredSection from '../components/shop-furniture/centered-section';
import ThreeColumn from '../components/shop-furniture/three-column';
import ShopInfo from '../components/shop-furniture/shop-info';
import ShopMap from '../components/shop-furniture/shop-map';
import Layout from '../components/layout';
import Assemblies from '../components/assemblies';

const Page = ({ data }) => {
  const {
    pageHeader,
    subHeader,
    heroImage,
    shop,
    introductoryText,
    whatCanYouDonate,
    yesPleaseList,
    noThanksList,
    howDoesYourDonationHelp,
    pageInformation,
    assemblies,
  } = data.contentfulPageFurnitureShop;

  if (!shop) return null;

  return (
    <Layout pageInformation={pageInformation} pageTitle={pageHeader}>
      <article>
        <ShopHero
          header={pageHeader}
          subHeader={subHeader}
          introductoryText={introductoryText.introductoryText}
          image={heroImage}
          contactNumber={shop.contactNumber}
        />
        <CenteredSection
          header="What can you donate"
          text={whatCanYouDonate}
          contactNumber={shop.contactNumber}
        />
        <ThreeColumn
          yesList={yesPleaseList}
          noList={noThanksList}
          donationHelpText={howDoesYourDonationHelp}
        />
        <ShopInfo
          address={shop.displayAddress}
          openingHours={shop.openingHours}
          parking={shop.parkingInformation}
          disabledAccess={shop.disabledAccessInformation}
        />
        <ShopMap shop={shop} />
        <Assemblies assemblies={assemblies} />
      </article>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object,
};

export default Page;

export const furnitureShopPageQuery = graphql`
  query furnitureShopPageTemplateQuery($slug: String!) {
    contentfulPageFurnitureShop(slug: { eq: $slug }) {
      title
      slug
      pageHeader
      subHeader
      introductoryText {
        introductoryText
      }
      heroImage {
        ...ImageFragment
      }
      shop {
        ...ShopComponentFragment
      }
      whatCanYouDonate {
        childContentfulRichText {
          html
        }
      }
      yesPleaseList
      noThanksList
      howDoesYourDonationHelp {
        childContentfulRichText {
          html
        }
      }
      pageInformation {
        ...PageInformationFragment
      }
      assemblies {
        ... on Node {
          ...ContentCardBannerFragment
          ...CtaAssemblyFragment
          ...DownloadBannerAssemblyFragment
          ...AssemblyFormFragment
          ...TestimonialsAssemblyFragment
          ...AdviceSearchBoxComponentFragment
          ...DonationBanner
          ...GoogleMapFragment
          ...InlineCallout
          ...LinkBoxFragment
          ...ShareBlockFragment
          ...TwoColumnTextAndImageBlockFragment
        }
      }
    }
  }
`;
