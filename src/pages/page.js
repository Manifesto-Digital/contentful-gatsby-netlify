import React from 'react'
import { graphql } from 'gatsby'

const Page = ({ data }) => {
  const { id, pageTitle } = data.contentfulStandardPage
  const { bodyCopy } = data.contentfulStandardPage
  return (
    <div
      style={{
        marginBottom: '1.5rem',
        padding: '1.5rem',
        border: '1px solid #ccc',
      }}
    >
      <h3>{pageTitle}</h3>
      <h3>{id}</h3>
      {bodyCopy.internal.content}
    </div>
  )
}

export default Page

export const pageQuery = graphql`
  query getSinglePage {
    contentfulStandardPage(id: { eq: "0692b320-a4e7-5f45-8728-bba4160ff144" }) {
      id
      pageTitle
      bodyCopy {
        internal {
          content
        }
      }
    }
  }
`
