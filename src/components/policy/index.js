import React from 'react';
import PropTypes from 'prop-types';
import { dateAsString } from '../../utils/dates';
import RichText from '../rich-text';
import { PolicyCard, Detail, DocumentDownload } from './styles';

const Policy = ({ data }) => {
  const { policyName, author, publishDate, displayDate, summary, media } = data;

  return (
    <>
      <PolicyCard>
        <Detail>
          <strong>By:</strong> {author}
        </Detail>
        <Detail>
          <strong>Published:</strong>{' '}
          {displayDate || dateAsString(publishDate, 'DD/MM/YYYY')}
        </Detail>
        <h4>{policyName}</h4>
        {media && (
          <DocumentDownload
            cta={{ buttonText: media.title, download: media }}
          />
        )}
      </PolicyCard>
      <RichText richText={summary} />
    </>
  );
};

Policy.propTypes = {
  data: PropTypes.shape({
    policyName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired,
    displayDate: PropTypes.string,
    summary: PropTypes.object.isRequired,
    media: PropTypes.object,
  }),
};

export default Policy;
