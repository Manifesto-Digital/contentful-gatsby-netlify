import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
import ContentCard from '../content-card';
import RichText from '../rich-text';
import { Container } from '../styled/containers';
// Styles
import { BannerBackground, HeaderText, CardRow } from './styles';

const ContentCardBanner = ({ data }) => {
  const { header, bannerColour, bannerFlow, contentCards } = data;

  if (contentCards && contentCards.length < 2) return null;

  return (
    <BannerBackground
      bannerColour={consistentString(bannerColour)}
      bannerFlow={consistentString(bannerFlow)}
    >
      <Container>
        <HeaderText as={RichText} richText={header} />
        <CardRow items={contentCards.length}>
          {contentCards.map((contentCard, i) => (
            <ContentCard
              key={i}
              data={contentCard}
              bannerFlow={consistentString(bannerFlow)}
            />
          ))}
        </CardRow>
      </Container>
    </BannerBackground>
  );
};

ContentCardBanner.propTypes = {
  data: PropTypes.shape({
    bannerColour: PropTypes.oneOf(['White', 'Grey']).isRequired,
    bannerFlow: PropTypes.oneOf(['Vertical', 'Horizontal', 'Grid']).isRequired,
    header: PropTypes.shape({
      childContentfulRichText: PropTypes.shape({
        html: PropTypes.string,
      }),
    }),
    contentCards: PropTypes.array,
  }),
};

export default ContentCardBanner;
