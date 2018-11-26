import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
// Styles

const IndexPage = () => (
  <Layout>
    <h1>Hi develop</h1>
    <p>Welcome to your new Shelter Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/content-page-1">Go to page</Link>
    <Link to="/form">Go to form</Link>
  </Layout>
)

export default IndexPage
