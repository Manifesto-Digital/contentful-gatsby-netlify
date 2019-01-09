import React from 'react';

// eslint-disable-next-line import/no-mutable-exports
export let lastProps;

const Recaptcha = props => {
  lastProps = props;

  return <mock-recaptcha />;
};

export default Recaptcha;
