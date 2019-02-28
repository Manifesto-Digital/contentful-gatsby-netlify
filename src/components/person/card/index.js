import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import { ImageProps } from '../../../prop-types';
// SVGs
import ArrowRight from '../../../assets/svg/icons/chevron-right-light.svg';
import Envelope from '../../../assets/svg/icons/envelope-light.svg';
import Phone from '../../../assets/svg/icons/phone-light.svg';
// Styles
import {
  Card,
  Info,
  StyledImage,
  ContactLine,
  ContactIcon,
  Name,
  JobTitle,
} from './styles';
import { IconHolder } from '../../styled/icons';
import { CoveringLink } from '../../styled/links';
import { VisuallyHidden } from '../../styled/accessibility';

const PersonCard = ({ person, link, columns }) => {
  const {
    firstName,
    lastName,
    jobTitle,
    phoneNumber,
    emailAddress,
    photo,
  } = person;

  console.log('columns', columns);

  return (
    <Card hasLink={!!link} columns={columns} as={columns && 'li'}>
      <StyledImage image={photo} width={500} height={500} fit="crop" />
      <Info>
        <Name>
          {firstName} {lastName}
        </Name>
        <JobTitle>{jobTitle}</JobTitle>
        {emailAddress && (
          <ContactLine>
            <ContactIcon src={Envelope} /> {emailAddress}
          </ContactLine>
        )}
        {phoneNumber && (
          <ContactLine>
            <ContactIcon src={Phone} /> {phoneNumber}
          </ContactLine>
        )}
      </Info>
      <IconHolder aria-hidden="true">
        <SVG src={ArrowRight} cacheGetRequests />
      </IconHolder>

      {link && (
        <CoveringLink aria-hidden="true" internalLink={link}>
          <VisuallyHidden>
            {firstName} {lastName}
          </VisuallyHidden>
        </CoveringLink>
      )}
    </Card>
  );
};

PersonCard.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    emailAddress: PropTypes.string,
    photo: ImageProps,
  }),
  link: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  columns: PropTypes.number,
};

export default PersonCard;
