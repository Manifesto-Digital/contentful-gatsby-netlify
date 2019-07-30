import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, Card, Icon, NumberText } from './styles';
import iconSrc from '../../utils/iconSrc';

const ContactCard = ({ data }) => {
  if (!data) return null;

  const {
    contactNumber1,
    contactNumber1Text,
    contactNumber2,
    contactNumber2Text,
  } = data;

  return (
    <CardWrapper>
      <Card>
        <Icon src={iconSrc('telephone')} />
        <div>
          <NumberText>{contactNumber1Text}</NumberText>
          <a href={`tel:${contactNumber1}`}>{contactNumber1}</a>
        </div>
      </Card>
      {contactNumber2 && (
        <Card>
          <Icon src={iconSrc('telephone')} />
          <div>
            <NumberText>{contactNumber2Text}</NumberText>
            <a href={`tel:${contactNumber2}`}>{contactNumber2}</a>
          </div>
        </Card>
      )}
    </CardWrapper>
  );
};

ContactCard.propTypes = {
  data: PropTypes.shape({
    contactNumber1: PropTypes.string.isRequired,
    contactNumber1Text: PropTypes.string.isRequired,
    contactNumber2: PropTypes.string,
    contactNumber2Text: PropTypes.string,
  }),
};

export default ContactCard;
