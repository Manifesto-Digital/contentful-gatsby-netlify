import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import ShopSidebar from '../components/shop-sidebar';
import Form from '../components/form';
import Assemblies from '../components/assemblies';
// Styles
import {
  Container,
  TwoThirds,
  SideBar,
  ContentWithSideBar,
} from '../components/styled/containers';

const Page = ({ data }) => {
  const {
    title,
    bodyCopy,
    shop,
    form,
    pageInformation,
    assemblies,
  } = data.contentfulPageShop;

  return (
    <Layout pageInformation={pageInformation} pageTitle={title}>
      <article>
        <PageTitle>
          <h1>{title}</h1>
        </PageTitle>
        <Container>
          <ContentWithSideBar>
            <TwoThirds>
              <RichText richText={bodyCopy} />
              {form && <Form data={form} insideContainer />}
              <Assemblies assemblies={assemblies} insideContainer />
            </TwoThirds>
            <SideBar>
              <ShopSidebar data={shop} />
            </SideBar>
          </ContentWithSideBar>
        </Container>
      </article>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPageShop: PropTypes.object,
  }),
};

export default Page;

export const shopPageQuery = graphql`
  query shopPageTemplateQuery($slug: String!) {
    contentfulPageShop(slug: { eq: $slug }) {
      title
      bodyCopy {
        json
      }
      shop {
        ...ShopComponentFragment
      }
      form {
        ...AssemblyFormFragment
      }
      pageInformation {
        ...PageInformationFragment
      }
      assemblies {
        ... on Node {
          ...CardsWithIconsFragment
          ...ContentCardBannerFragment
          ...CtaAssemblyFragment
          ...DownloadBannerAssemblyFragment
          ...ContentGrid4Fragment
          ...DonationBanner
          ...InlineCallout
          ...LinkBoxFragment
          ...ShareBlockFragment
          ...StatsFragment
          ...TwoColumnTextAndImageBlockFragment
        }
      }
    }
  }
`;
