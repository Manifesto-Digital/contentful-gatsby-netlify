import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
import ShopSidebar from '../components/shop-sidebar';
import Form from '../components/form';
// Styles
import {
  Container,
  TwoThirds,
  SideBar,
  ContentWithSideBar,
} from '../components/styled/containers';

const Page = ({ data }) => {
  const { name, bodyCopy, shop, form } = data.contentfulPageAssemblyShopPage;

  return (
    <Layout>
      <article>
        <PageTitle>
          <h1>{name}</h1>
        </PageTitle>
        <Container>
          <ContentWithSideBar>
            <TwoThirds>
              <RichText richText={bodyCopy} />
              <Form data={form} insideContainer />
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
    contentfulPageAssemblyShopPage: PropTypes.object,
  }),
};

export default Page;

export const shopPageQuery = graphql`
  query shopPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyShopPage(slug: { eq: $slug }) {
      name
      bodyCopy {
        childContentfulRichText {
          html
        }
      }
      shop {
        ...ShopTopicFragment
      }
      form {
        ...AssemblyFormFragment
      }
    }
  }
`;
