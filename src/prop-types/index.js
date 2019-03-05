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

export const ImageProps = PropTypes.shape({
  description: PropTypes.string.isRequired,
  file: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
});
