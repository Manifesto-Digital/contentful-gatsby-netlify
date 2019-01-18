import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
import ContentCard from '../content-card';
// Styles
import { BannerBackground, HeaderText, CardRow } from './styles';

const ContentCardBanner = ({ data }) => {
  const { bannerColour, header, contentCards } = data;
  // Have to remove empty <p> added by rich text field
  const headerText = header.childContentfulRichText.html.replace('<p></p>', '');

  return (
    <BannerBackground bannerColour={consistentString(bannerColour)}>
      {/* Have to dangerouslySetInnerHTML because of rich text field */}
      <HeaderText dangerouslySetInnerHTML={{ __html: headerText }} />
      <CardRow>
        {contentCards.map(contentCard => (
          <ContentCard data={contentCard} />
        ))}
      </CardRow>
    </BannerBackground>
  );
};

ContentCardBanner.propTypes = {
  data: PropTypes.shape({
    bannerColour: PropTypes.oneOf(['White', 'Grey']).isRequired,
    header: PropTypes.shape({
      childContentfulRichText: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
  }),
};

export default ContentCardBanner;
