export const getInternalLink = slug => {
  if (typeof window !== `undefined`) {
    const baseURL = window.location.origin
    return `${baseURL}/${slug}`
  }
}
