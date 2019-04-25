import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PaddedBox from '../padded-box';

const MediaContact = innerColour => (
  <StaticQuery
    query={graphql`
      query details {
        contentfulComponentMediaContactDetails(
          contentful_id: { eq: "2b8fYScWgWvL6rMpHZhnUr" }
        ) {
          title
          officePhoneNumber
          alternativePhone
          emailAddress
          officeOpeningHours
        }
      }
    `}
    render={data => {
      const {
        title,
        officePhoneNumber,
        officeOpeningHours,
        alternativePhone,
        emailAddress,
      } = data.contentfulComponentMediaContactDetails;

      const boxColour = innerColour.innerColour
        ? innerColour.innerColour
        : 'grey10';

      return (
        <PaddedBox as="aside" bg={boxColour}>
          <h3>{title}</h3>
          <p>
            Call us:{' '}
            <a href={`tel:${officePhoneNumber}`}>{officePhoneNumber}</a>{' '}
            {officeOpeningHours}
          </p>
          <p>
            <a href={`tel:${alternativePhone}`}>{alternativePhone}</a> at any
            other time
          </p>
          <p>
            or you can <a href={`mailto:${emailAddress}`}> email us</a>
          </p>
        </PaddedBox>
      );
    }}
  />
);

export default MediaContact;
