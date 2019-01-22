import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
import ContentCard from '../content-card';
import RichText from '../rich-text';
// Styles
import { BannerBackground, HeaderText, CardRow } from './styles';

const ContentCardBanner = ({ data }) => {
  const { bannerColour, header, contentCards } = data;
  if (contentCards && contentCards.length < 2) return null;

  return (
    <BannerBackground bannerColour={consistentString(bannerColour)}>
      <HeaderText as={RichText} richText={header} />
      <CardRow items={contentCards.length}>
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
