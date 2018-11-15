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
    <Link to="/demo/">Go to demo page</Link> <br />
    <Link to="/page/">Go to page</Link>
  </Layout>
)

export default IndexPage
