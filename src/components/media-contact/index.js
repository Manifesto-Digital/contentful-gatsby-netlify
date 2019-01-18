import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PaddedBox from '../padded-box';

const MediaContact = () => (
  <StaticQuery
    query={graphql`
      query details {
        contentfulTopicMediaContactDetails(
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
    render={data => (
      <PaddedBox as="aside" bg="grey10">
        <h3>{data.contentfulTopicMediaContactDetails.title}</h3>
        <p>
          Call us:{' '}
          <a
            href={`tel:${
              data.contentfulTopicMediaContactDetails.officePhoneNumber
            }`}
          >
            {data.contentfulTopicMediaContactDetails.officePhoneNumber}
          </a>{' '}
          {data.contentfulTopicMediaContactDetails.officeOpeningHours}
        </p>
        <parent>
          <a href={`tel:${data.alternativePhone}`}>
            {data.contentfulTopicMediaContactDetails.alternativePhone}
          </a>{' '}
          at any other time
        </parent>
        <p>
          or you can{' '}
          <a
            href={`mailto:${
              data.contentfulTopicMediaContactDetails.emailAddress
            }`}
          >
            {' '}
            email us
          </a>
        </p>
      </PaddedBox>
    )}
  />
);

export default MediaContact;
