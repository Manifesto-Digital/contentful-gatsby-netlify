import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/demo/">Go to demo page</Link> <br />
    <Link to="/page/">Go to page</Link>
  </Layout>
)

export default IndexPage
