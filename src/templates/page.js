import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// Components
import Hero from '../components/hero'
import RichText from '../components/richText'
import Assemblies from '../components/assemblies'
// Styles
import { Container } from '../components/styled/containers'

const Page = ({ data }) => {
  const {
    bodyCopy,
    heroContent,
    assemblies,
  } = data.contentfulPageAssemblyContentPage

  return (
    <Layout>
      <Hero content={heroContent} />
      <Container>{bodyCopy && <RichText richText={bodyCopy} />}</Container>
      <Assemblies assemblies={assemblies} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyContentPage: PropTypes.object,
  }),
}

export default Page

export const pageQuery = graphql`
  query pageTemplateQuery($slug: String!) {
    contentfulPageAssemblyContentPage(slug: { eq: $slug }) {
      title
      heroContent {
        title
        subtitle
        blackText
        image {
          id
          description
          title
          file {
            url
            fileName
            contentType
          }
        }
      }
      bodyCopy {
        content {
          nodeType
          content {
            value
            content {
              content {
                value
              }
            }
            marks {
              type
            }
          }
        }
      }
      assemblies {
        id
        internal {
          type
        }
        bannerColour
        ctaHeaderText
        cta {
          ctaColour
          name
          internalLink {
            id
            slug
          }
          externalUrl
          buttonText
        }
      }
    }
  }
`
