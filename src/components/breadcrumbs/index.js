import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbList, BreadcrumbListItem, BreadcrumbAnchor } from './styles';

const Breadcrumbs = ({ parentPages, currentTitle }) => {
  if (!parentPages) return null;

  // Flatten the parent to a cleaner format
  const flattenedParentPages = parentPages
    .filter(page => Object.keys(page).length !== 0 && page.menuItem)
    .map(page => page.menuItem[0]);

  if (flattenedParentPages.length === 0) return null;

  return (
    <nav role="navigation">
      <BreadcrumbList>
        {flattenedParentPages.map((crumb, i) => (
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
        <BreadcrumbListItem>{currentTitle}</BreadcrumbListItem>
      </BreadcrumbList>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  parentPages: PropTypes.array,
  currentTitle: PropTypes.string,
};

export default Breadcrumbs;
