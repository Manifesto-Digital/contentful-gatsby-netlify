import React from 'react'
import PropTypes from 'prop-types'

const ResponsiveImage = ({
  image: { description, file },
  mobileW,
  desktopW,
  fit,
  progressive,
  mobileH,
  desktopH,
}) => {
  if (!mobileW || !desktopW || !file) return null

  // Use the https://www.contentful.com/developers/docs/references/images-api/ to construct a mobile and desktop image
  const baseUrl = `${file.url}?fm=jpg${progressive ? `&fl=progressive` : ``}${
    fit ? `&fit=${fit}` : ``
  }`
  const mobileSize = `&w=${mobileW}${mobileH ? `&h=${mobileH}` : ``}`
  const desktopSize = `&w=${desktopW}${desktopH ? `&h=${desktopH}` : ``}`

  return (
    <img
      srcSet={`${baseUrl}${mobileSize} 480w,
        ${baseUrl}${desktopSize}`}
      src={`${baseUrl}${desktopSize}`}
      alt={`${description}`}
    />
  )
}
export default ResponsiveImage

ResponsiveImage.propTypes = {
  mobileW: PropTypes.number.isRequired,
  mobileH: PropTypes.number,
  desktopW: PropTypes.number.isRequired,
  desktopH: PropTypes.number,
  fit: PropTypes.string,
  progressive: PropTypes.bool,
  image: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string,
    file: PropTypes.shape({
      contentType: PropTypes.string,
      fileName: PropTypes.string,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }),
}