import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from '../../../assets/svg/icons/angle-left-light.svg';
import RightArrow from '../../../assets/svg/icons/angle-right-light.svg';
// Components
import LinkHandler from '../../link-handler';
// Styles
import { StyledLink, DirectionIcon, StyledSVG } from './styles';

const PaginationLink = ({ title, type, linkData }) => (
  <StyledLink as={LinkHandler} internalLink={linkData} type={type}>
    <DirectionIcon type={type}>
      {title}
      <StyledSVG src={type === 'prev' ? LeftArrow : RightArrow} />
    </DirectionIcon>
    <span>{linkData.title}</span>
  </StyledLink>
);

PaginationLink.propTypes = {
  linkData: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['prev', 'next']).isRequired,
  title: PropTypes.string.isRequired,
};

export default PaginationLink;
