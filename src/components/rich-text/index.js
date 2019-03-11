import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const RichText = ({ richText, className, sidebar }) => {
  const hasContent = item =>
    item &&
    item.childContentfulRichText &&
    item.childContentfulRichText.html &&
    item.childContentfulRichText.html !== '<p></p>'; // gatsby-transformer-contentful-richtext still includes an empty p if an editor clears the rich text

  if (!hasContent(richText)) return null;

  // Strip out empty <p> tag
  const newMarkup = richText.childContentfulRichText.html.replace(
    '<p></p>',
    ''
  );

  const createMarkup = markupToRender => ({ __html: markupToRender });

  /* eslint-disable  react/no-danger */
  return (
    <Wrapper
      sidebar={sidebar}
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
  sidebar: PropTypes.bool,
};

export default RichText;
