export const getInternalLink = slug => {
  const baseURL = window.location.origin
  return `${baseURL}/${slug}`
}
