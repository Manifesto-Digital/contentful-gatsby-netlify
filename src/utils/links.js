export const getInternalLink = slug => {
  if (typeof window !== `undefined`) {
    return `${slug}`;
  }
};
