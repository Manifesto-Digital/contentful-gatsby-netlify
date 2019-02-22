import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import iconSrc from '../../utils/iconSrc';

const ContactCard = ({ data }) => {
  const {
    contactNumber1,
    contactNumber1Text,
    contactNumber2,
    contactNumber2Text,
  } = data;

  return (
    <div>
      <div>
        <div>
          <SVG src={iconSrc('telephone')} />
        </div>
        <div>{contactNumber1Text}</div>
        <div>{contactNumber1}</div>
      </div>
      {contactNumber2 && (
        <div>
          <div>
            <SVG src={iconSrc('telephone')} />
          </div>
          <div>{contactNumber2Text}</div>
          <div>{contactNumber2}</div>
        </div>
      )}
    </div>
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
