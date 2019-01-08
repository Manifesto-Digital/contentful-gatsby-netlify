import React from 'react';
import { Link } from 'gatsby';

// Components
import Layout from '../components/layout';

const SuccessPage = () => (
  <Layout>
    <h2>Thanks for the info </h2>
    <Link to="/form">Do that again</Link>
  </Layout>
);

export default SuccessPage;
