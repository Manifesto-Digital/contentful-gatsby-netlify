import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SubpageMenu from '../components/subpage-menu'
import SubpageNextPrev from '../components/subpage-next-prev'
// Components
import Hero from '../components/hero'
import RichText from '../components/richText'
import Assemblies from '../components/assemblies'
// Styles
import { Container } from '../components/styled/containers'

const Page = ({ data, pageContext }) => {
  const {
    bodyCopy,
    heroContent,
    assemblies,
  } = data.contentfulPageAssemblyContentPage

  return (
    <Layout>
      <SubpageMenu data={pageContext.subpages} activeSlug={pageContext.slug} />
      {heroContent && <Hero content={heroContent[0]} />}
      <Container>{bodyCopy && <RichText richText={bodyCopy} />}</Container>
      <Assemblies assemblies={assemblies} />
      <SubpageNextPrev
        data={pageContext.subpages}
        activeSlug={pageContext.slug}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    contentfulPageAssemblyContentPage: PropTypes.object,
  }),
  pageContext: PropTypes.object,
}

export default Page

export const pageQuery = graphql`
  query pageTemplateQuery($slug: String!) {
    contentfulPageAssemblyContentPage(slug: { eq: $slug }) {
      title
      heroContent {
        __typename
        ... on ContentfulTopicHeroNoCard {
          id
          title
          subtitle
          blackText
          image {
            ...ImageFragment
          }
        }
        ... on ContentfulTopicHeroWithCard {
          id
          title
          subtitle
          cardPosition
          image {
            ...ImageFragment
          }
          linkText
          internalLink {
            id
            slug
          }
          externalUrl
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
        ... on Node {
          ...CtaAssemblyFragment
          ...ContentGrid4Fragment
          ...BannerTopicFragment
          ...DownloadBannerAssemblyFragment
        }
      }
    }
  }
`
