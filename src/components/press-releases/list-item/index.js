import React from 'react';
import PropTypes from 'prop-types';
import { dateAsString } from '../../../utils/dates';
import ArrowRight from '../../../assets/svg/icons/chevron-right-light.svg';
import { LongTextRequired } from '../../../prop-types';
// Styles
import {
  PressItem,
  CoveringLink,
  IconHolder,
  ArrowIcon,
  PostedDate,
} from './styles';
import { VisuallyHidden } from '../../styled/accessibility';

const Item = ({ pressRelease }) => {
  const { title, datePosted } = pressRelease;

  // Still render list item with title if short description is not provided
  const shortDescription = pressRelease.pageInformation
    ? pressRelease.pageInformation.shortDescription.internal.content
    : null;

  return (
    <PressItem shadow bg="white">
      <h3>{title}</h3>
      {shortDescription && <p>{shortDescription}</p>}

      <IconHolder aria-hidden="true">
        <ArrowIcon src={ArrowRight} alt=" " cacheGetRequests />
      </IconHolder>

      <PostedDate>
        <strong>Posted on {dateAsString(datePosted, 'DD MMM YYYY')}</strong>
      </PostedDate>

      <CoveringLink aria-hidden="true" internalLink={pressRelease}>
        <VisuallyHidden>{title}</VisuallyHidden>
      </CoveringLink>
    </PressItem>
  );
};

Item.propTypes = {
  pressRelease: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    datePosted: PropTypes.string.isRequired,
    pageInformation: PropTypes.shape({
      shortDescription: LongTextRequired,
    }).isRequired,
  }),
};

export default Item;
