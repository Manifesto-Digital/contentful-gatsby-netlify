import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ image: { description, file }, className, width }) => {
  if (!file || !file.url) return;
  const url = width ? `${file.url}?w=${width}` : file.url;
  return <img src={url} alt={description} className={className} />;
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
  className: PropTypes.string,
  width: PropTypes.number,
};

export default Image;
