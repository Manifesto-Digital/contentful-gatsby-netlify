import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbList, BreadcrumbListItem, BreadcrumbAnchor } from './styles';

const Breadcrumbs = ({ parentPages, slug, currentTitle }) => {
  if (!parentPages) return null;

  console.log('parent pages', parentPages);

  // Add current page to parent slugs array so we have the full path
  const currentPage = {
    slug,
    label: currentTitle,
  };
  // Flatten the parent pages to same format as current page
  const flattenedParentPages = parentPages.map(page => page.menuItem[0]);

  const fullPathArray = [...flattenedParentPages, currentPage];

  return (
    <nav role="navigation">
      <BreadcrumbList>
        {fullPathArray.map((crumb, i) => (
          <BreadcrumbListItem key={i}>
            <BreadcrumbAnchor
              internalLink={{
                slug: crumb.slug,
              }}
            >
              {crumb.label || crumb.title}
            </BreadcrumbAnchor>
          </BreadcrumbListItem>
        ))}
      </BreadcrumbList>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  parentPages: PropTypes.array,
  slug: PropTypes.string,
  currentTitle: PropTypes.string,
};

export default Breadcrumbs;
