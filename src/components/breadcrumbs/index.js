import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbList, BreadcrumbListItem, BreadcrumbAnchor } from './styles';

const Breadcrumbs = ({ parentSlugs, slug, currentTitle }) => {
  // Add current page to parent slugs array so we have the full path
  const currentPage = {
    slug,
    label: currentTitle,
  };
  const fullPathArray = [...parentSlugs, currentPage];

  return (
    <nav role="navigation">
      <BreadcrumbList>
        {fullPathArray.map((crumb, i) => (
          <BreadcrumbListItem key={i}>
            <BreadcrumbAnchor internalLink={{ slug: crumb.slug }}>
              {crumb.label}
            </BreadcrumbAnchor>
          </BreadcrumbListItem>
        ))}
      </BreadcrumbList>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  parentSlugs: PropTypes.array,
  slug: PropTypes.string,
  currentTitle: PropTypes.string,
};

export default Breadcrumbs;
