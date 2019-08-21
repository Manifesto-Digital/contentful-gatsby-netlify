import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const Image = ({
  image: { description, file },
  className,
  width,
  height,
  fit,
  presentational,
}) => {
  if (!file || !file.url) return null;

  const { url } = file;
  const params = queryString.stringify({
    h: height,
    w: width,
    fit,
  });

  return (
    <img
      src={`${url}${params ? `?${params}` : ''}`}
      alt={`${!presentational ? description || url : ''}`}
      className={className}
    />
  );
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
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  fit: PropTypes.oneOf(['pad', 'fill', 'scale', 'crop', 'thumb']),
  presentational: PropTypes.bool,
};

export default Image;
