import React from 'react';
import PropTypes from 'prop-types';
import RightArrow from '../../assets/svg/icons/angle-right-light.svg';
import { consistentString } from '../../utils/content-formatting';
// Styles
import {
  Card,
  CoveringLink,
  CardTitle,
  CardImage,
  SummaryText,
  Wrapper,
  ArrowSVG,
} from './styles';

const isOdd = num => num % 2 === 1;

const ContentCard = ({ data, bannerFlow, cardCount }) => {
  const { title, slug, pageInformation = null } = data;

  const cardLink = {};
  cardLink.slug = slug;

  // Fallback until all images are set in pageInformation field
  const image = pageInformation.pageThumbnail;

  // Fallback until all descriptions are set in pageInformation field
  const description = pageInformation.shortDescription.shortDescription;

  if (!image) return null;

  return (
    <Card>
      <CardImage
        mobileW={600}
        mobileH={350}
        desktopW={isOdd(cardCount) && bannerFlow === 'grid' ? 1100 : 600}
        desktopH={isOdd(cardCount) && bannerFlow === 'grid' ? 642 : 350}
        fit="fill"
        focusArea="center"
        image={image}
        presentational
      />
      <Wrapper>
        {title && (
          <CardTitle
            bgColour={consistentString(pageInformation.taxonomyColour)}
          >
            {title}
          </CardTitle>
        )}
        <SummaryText internalLink={cardLink}>
          {description}
          {bannerFlow === 'grid' && (
            <ArrowSVG src={RightArrow} cacheGetRequests />
          )}
        </SummaryText>
      </Wrapper>
      <CoveringLink tabIndex="-1" aria-hidden="true" internalLink={cardLink}>
        {description}
      </CoveringLink>
    </Card>
  );
};

ContentCard.propTypes = {
  bannerFlow: PropTypes.oneOf(['vertical', 'horizontal', 'grid']),
  cardCount: PropTypes.number,
  data: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    pageInformation: PropTypes.shape({
      shortDescription: PropTypes.object,
      pageThumbnail: PropTypes.object,
    }).isRequired,
  }),
};

export default ContentCard;
