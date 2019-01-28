import PropTypes from 'prop-types';

export const richTextPropTypes = {
  childContentfulRichText: PropTypes.shape({
    html: PropTypes.string,
  }),
};

export const LongTextRequired = PropTypes.shape({
  internal: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
}).isRequired;
