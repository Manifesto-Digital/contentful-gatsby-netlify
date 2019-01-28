import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  Card,
  ImageContainer,
  CardTitle,
  CardImage,
  SummaryText,
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

  // Fallback until all images are set in pageInformation field
  const image =
    pageInformation && pageInformation.pageThumbnail
      ? pageInformation.pageThumbnail
      : featuredImage;

  return (
    <Card to={slug}>
      <ImageContainer>
        <CardImage
          mobileW={600}
          mobileH={350}
          desktopW={600}
          desktopH={350}
          fit="fill"
          focusArea={cropImageFrom}
          image={image}
        />
        <CardTitle>{title}</CardTitle>
      </ImageContainer>
      <SummaryText>{summaryText}</SummaryText>
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
  }),
};

export default ContentCard;
