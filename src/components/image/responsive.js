import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

const ResponsiveImage = ({
  image: { description, file },
  mobileW,
  desktopW,
  fit,
  focusArea,
  progressive,
  mobileH,
  desktopH,
  className,
  presentational = false,
}) => {
  if (!mobileW || !desktopW || !file) return null;

  const { url } = file;

  // Use the https://www.contentful.com/developers/docs/references/images-api/ to construct a mobile and desktop image
  const params = {
    fl: progressive ? 'progressive' : undefined,
    fit,
    f: focusArea,
  };
  const mobileSize = {
    h: mobileH,
    w: mobileW,
  };
  const desktopSize = {
    h: desktopH,
    w: desktopW,
  };

  const mobileParams = queryString.stringify(Object.assign(params, mobileSize));
  const desktopParams = queryString.stringify(
    Object.assign(params, desktopSize)
  );

  return (
    <img
      className={className}
      srcSet={`${url}${mobileParams ? `?${mobileParams}` : ''} 480w,
        ${url}${desktopParams ? `?${desktopParams}` : ''}`}
      src={`${url}${desktopParams ? `?${desktopParams}` : ''}`}
      alt={`${!presentational ? description : url}`}
    />
  );
};
export default ResponsiveImage;

ResponsiveImage.propTypes = {
  mobileW: PropTypes.number.isRequired,
  mobileH: PropTypes.number,
  desktopW: PropTypes.number.isRequired,
  desktopH: PropTypes.number,
  fit: PropTypes.oneOf(['pad', 'fill', 'scale', 'crop', 'thumb']),
  focusArea: PropTypes.string,
  progressive: PropTypes.bool,
  className: PropTypes.string,
  presentational: PropTypes.bool,
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
