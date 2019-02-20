import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
// Components
import PageTitle from '../components/page-title';
import RichText from '../components/rich-text';
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
          <h1>
            {name} - {shop[0].type}
          </h1>
        </PageTitle>
        <Container>
          <ContentWithSideBar>
            <TwoThirds>
              <RichText richText={bodyCopy} />
            </TwoThirds>
            <SideBar>Hello world</SideBar>
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

export const pageQuery = graphql`
  query shopPageTemplateQuery($slug: String!) {
    contentfulPageAssemblyShopPage(slug: { eq: $slug }) {
      name
      bodyCopy {
        childContentfulRichText {
          html
        }
      }
      shop {
        type
        location {
          lon
          lat
        }
        displayAddress {
          childContentfulRichText {
            html
          }
        }
        region
        contactNumber
        contactEmail
        openingHours {
          childContentfulRichText {
            html
          }
        }
        parkingInformation {
          childContentfulRichText {
            html
          }
        }
        disabledAccessInformation {
          childContentfulRichText {
            html
          }
        }
      }
      form {
        formHeader
        backgroundColour
        formId
        sourceCode
        submitUrl
        thankYouMessage {
          childContentfulRichText {
            html
          }
        }
        submitCallToAction
        formFields {
          __typename
        }
      }
    }
  }
`;
