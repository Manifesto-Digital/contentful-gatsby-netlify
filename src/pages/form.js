import React from 'react'
import { Link } from 'gatsby'

// Components
import Layout from '../components/layout'
// Styles

const IndexPage = () => (
  <Layout>
    <form name="contact" method="POST" netlify>
      <p>
        <label htmlFor="fname">
          Your Name: <input id="fname" type="text" name="name" />
        </label>
      </p>
      <p>
        <label htmlFor="femail">
          Your Email: <input id="femail" type="email" name="email" />
        </label>
      </p>
      <p>
        <label htmlFor="fmessage">
          Message: <textarea if="fmessage" name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <Link to="/">Home</Link>
  </Layout>
)

export default IndexPage
