import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image: { description, file } }) => {
  if (!file || !file.url) return;
  return <img src={file.url} alt={description} />;
};

Image.propTypes = {
  image: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string,
    file: PropTypes.shape({
      contentType: PropTypes.string,
      fileName: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Image;
