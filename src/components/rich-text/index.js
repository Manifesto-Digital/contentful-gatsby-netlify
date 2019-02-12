import React from 'react';
import PropTypes from 'prop-types';

const RichText = ({ richText, className }) => {
  const hasContent = item =>
    item &&
    item.childContentfulRichText &&
    item.childContentfulRichText.html &&
    item.childContentfulRichText.html !== '<p></p>'; // gatsby-transformer-contentful-richtext still includes an empty p if an editor clears the rich text

  // Strip out empty <p> tag
  const newMarkup = richText.childContentfulRichText.html.replace(
    '<p></p>',
    ''
  );

  const createMarkup = markupToRender => ({ __html: markupToRender });

  if (!hasContent(richText)) return null;

  /* eslint-disable  react/no-danger */
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={createMarkup(newMarkup)}
    />
  );
  /* eslint-enable react/no-danger */
};
RichText.propTypes = {
  richText: PropTypes.shape({
    childContentfulRichText: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default RichText;
