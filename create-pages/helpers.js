function getFullSlug(parentSlug, slug) {
  let parentSlugs = '';

  if (parentSlug && Array.isArray(parentSlug)) {
    const arrayOfSlugs = parentSlug.map(ref => ref.slug);
    parentSlugs = arrayOfSlugs.join('/');
  }

  return `${parentSlugs}/${slug}`;
}

module.exports = { getFullSlug };
