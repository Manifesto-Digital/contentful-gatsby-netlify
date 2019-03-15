import React from 'react';
import PropTypes from 'prop-types';
import RichText from '../rich-text';
import { consistentString } from '../../utils/content-formatting';
import { Sidebar } from './styles';

const ShopSidebar = ({ data }) => {
  const {
    type,
    displayAddress,
    contactNumber,
    contactEmail,
    openingHours,
    parkingInformation,
    disabledAccessInformation,
  } = data;

  return (
    <Sidebar>
      {displayAddress && (
        <>
          <h3>Address</h3>
          <RichText richText={displayAddress} />
        </>
      )}

      {parkingInformation && (
        <>
          <h3>Parking</h3>
          <RichText richText={parkingInformation} />
        </>
      )}

      {disabledAccessInformation && (
        <>
          <h3>Disabled access</h3>
          <RichText richText={disabledAccessInformation} />
        </>
      )}

      {consistentString(type) === 'furniture' && (
        <>
          <h3>Furniture accepted</h3>
          <p>Yes</p>
        </>
      )}

      {openingHours && (
        <>
          <h3>Opening times</h3>
          <RichText richText={openingHours} />
        </>
      )}

      {contactNumber && (
        <>
          <h3>Phone</h3>
          <p>
            <a href={`tel:${contactNumber}`}>{contactNumber}</a>
          </p>
        </>
      )}

      {contactEmail && (
        <>
          <h3>Email</h3>
          <p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </>
      )}
    </Sidebar>
  );
};

ShopSidebar.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    displayAddress: PropTypes.object,
    contactNumber: PropTypes.string,
    contactEmail: PropTypes.string,
    openingHours: PropTypes.object,
    parkingInformation: PropTypes.object,
    disabledAccessInformation: PropTypes.object,
  }),
};

export default ShopSidebar;
