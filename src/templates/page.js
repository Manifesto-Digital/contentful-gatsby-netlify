import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// Components
import Hero from '../components/hero'
import RichText from '../components/richText'
// Styles
import { Container } from '../components/styled/containers'

const Page = ({ data }) => {
  const { bodyCopy, heroContent } = data.contentfulPageAssemblyContentPage

  return (
    <Layout>
      <Hero content={heroContent} />
      <Container>{bodyCopy && <RichText richText={bodyCopy} />}</Container>
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
    }
  }
`
