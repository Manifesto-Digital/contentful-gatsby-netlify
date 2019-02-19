import React from 'react';
import PropTypes from 'prop-types';
import { dateAsString } from '../../utils/dates';
import RichText from '../rich-text';
import DownloadCTA from '../download-cta';

const Policy = ({ data }) => {
  const { policyName, author, publishDate, displayDate, summary, media } = data;

  return (
    <div>
      <div>
        <p>
          <strong>By:</strong> {author} <strong>Published:</strong>{' '}
          {displayDate || dateAsString(publishDate, 'DD/MM/YYYY')}
        </p>
        <h4>{policyName}</h4>
        <DownloadCTA cta={{ buttonText: media[0].title, download: media[0] }} />
      </div>
      <RichText richText={summary} />
    </div>
  );
};

Policy.propTypes = {
  data: PropTypes.shape({
    policyName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    displayDate: PropTypes.string,
    summary: PropTypes.object.isRequired,
    media: PropTypes.array,
  }),
};

export default Policy;
