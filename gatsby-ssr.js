/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';
import { resetIdCounter } from 'react-tabs';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="recaptcha-script"
      type="text/javascript"
      async
      defer
      src="https://www.google.com/recaptcha/api.js"
    />,
  ]);

  resetIdCounter();
};
