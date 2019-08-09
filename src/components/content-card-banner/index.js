import React from 'react';
import PropTypes from 'prop-types';
import { consistentString } from '../../utils/content-formatting';
import ContentCard from '../content-card';
import RichText from '../rich-text';
import { Container } from '../styled/containers';
// Styles
import { BannerBackground, HeaderText, CardRow } from './styles';

const ContentCardBanner = ({ data, sidebar }) => {
  if (!data) return null;

  const { header, bannerColour, bannerFlow, contentCards } = data;

  if (!contentCards || contentCards.length < 2) return null;

  const bannerDirection = sidebar ? 'vertical' : consistentString(bannerFlow);

  return (
    <BannerBackground
      bannerColour={consistentString(bannerColour)}
      bannerFlow={bannerDirection}
      sidebar={sidebar}
    >
      <Container>
        <HeaderText as={RichText} richText={header} />
        <CardRow items={contentCards.length}>
          {contentCards.map((contentCard, i) => (
            <ContentCard
              key={i}
              data={contentCard}
              bannerFlow={bannerDirection}
              currentCardCount={i}
              cardCount={contentCards.length}
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
      json: PropTypes.object,
    }),
    contentCards: PropTypes.array,
  }),
  sidebar: PropTypes.bool,
};

export default ContentCardBanner;
