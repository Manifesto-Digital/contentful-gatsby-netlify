import React from 'react';
import PropTypes from 'prop-types';
import LinkHandler from '../link-handler';
import { CardWrapper, Card, Icon } from './styles';
import iconSrc from '../../utils/iconSrc';

const ContactCard = ({ data }) => {
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
          <div>{contactNumber1Text}</div>
          <LinkHandler externalUrl={`tel:${contactNumber1}`}>
            {contactNumber1}
          </LinkHandler>
        </div>
      </Card>
      {contactNumber2 && (
        <Card>
          <Icon src={iconSrc('telephone')} />
          <div>
            <div>{contactNumber2Text}</div>
            <LinkHandler externalUrl={`tel:${contactNumber2}`}>
              {contactNumber2}
            </LinkHandler>
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
