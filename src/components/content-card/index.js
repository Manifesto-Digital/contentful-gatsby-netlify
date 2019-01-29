import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  Card,
  CoveringLink,
  CardTitle,
  CardImage,
  SummaryText,
  Wrapper,
} from './styles';

const ContentCard = ({ data }) => {
  const {
    title,
    slug,
    summaryText,
    featuredImage,
    pageInformation = null,
    cropImageFrom,
  } = data;

  const cardLink = {};
  cardLink.slug = slug;

  // Fallback until all images are set in pageInformation field
  const image =
    pageInformation && pageInformation.pageThumbnail
      ? pageInformation.pageThumbnail
      : featuredImage;

  // Fallback until all descriptions are set in pageInformation field
  const description =
    pageInformation && pageInformation.shortDescription.shortDescription
      ? pageInformation.shortDescription.shortDescription
      : summaryText;

  return (
    <Card>
      <CardImage
        mobileW={600}
        mobileH={350}
        desktopW={600}
        desktopH={350}
        fit="fill"
        focusArea={cropImageFrom}
        image={image}
        presentational
      />
      <Wrapper>
        <CardTitle>{title}</CardTitle>
        <SummaryText internalLink={cardLink}>{description}</SummaryText>
      </Wrapper>

      <CoveringLink tabindex="-1" aria-hidden="true" internalLink={cardLink}>
        {description}
      </CoveringLink>
    </Card>
  );
};

ContentCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    summaryText: PropTypes.string,
    featuredImage: PropTypes.shape({
      description: PropTypes.string,
      file: PropTypes.shape({
        fileName: PropTypes.string,
        url: PropTypes.string,
      }),
    }),
    cropImageFrom: PropTypes.string,

    pageInformation: PropTypes.shape({
      shortDescription: PropTypes.object,
      pageThumbnail: PropTypes.object,
    }),
  }),
};

export default ContentCard;
