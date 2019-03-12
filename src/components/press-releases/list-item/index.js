import React from 'react';
import PropTypes from 'prop-types';
import { dateAsString } from '../../../utils/dates';
import ArrowRight from '../../../assets/svg/icons/chevron-right-light.svg';
import { LongTextRequired } from '../../../prop-types';
// Styles
import { PressItem, ArrowIcon, PostedDate } from './styles';
import { IconHolder } from '../../styled/icons';
import { CoveringLink } from '../../styled/links';
import { VisuallyHidden } from '../../styled/accessibility';

const Item = ({ data }) => {
  const { title, datePosted } = data;

  // Still render list item with title if short description is not provided
  const shortDescription = data.pageInformation
    ? data.pageInformation.shortDescription.internal.content
    : null;

  return (
    <PressItem shadow bg="white">
      <h3>{title}</h3>
      {shortDescription && <p>{shortDescription}</p>}

      <IconHolder aria-hidden="true">
        <ArrowIcon src={ArrowRight} cacheGetRequests />
      </IconHolder>

      {datePosted && (
        <PostedDate>
          <strong>Posted on {dateAsString(datePosted, 'DD MMM YYYY')}</strong>
        </PostedDate>
      )}

      <CoveringLink aria-hidden="true" internalLink={data}>
        <VisuallyHidden>{title}</VisuallyHidden>
      </CoveringLink>
    </PressItem>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    datePosted: PropTypes.string,
    pageInformation: PropTypes.shape({
      shortDescription: LongTextRequired,
    }).isRequired,
  }),
};

export default Item;
