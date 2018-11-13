import React from 'react'
import { graphql } from 'gatsby'

const Book = ({ node }) => (
  <div
    style={{
      marginBottom: '1.5rem',
      padding: '1.5rem',
      border: '1px solid #ccc',
    }}
  >
    <h3>{node.title}</h3>
    <p>{node.id}</p>
    <div>
      <div>{node.title}</div>
    </div>
  </div>
)

const BooksPage = ({ data }) => (
  <div>
    {data.allContentfulBook.edges.map(edge => (
      <Book key={edge.node.id} node={edge.node} />
    ))}
  </div>
)

export default BooksPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBook {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
