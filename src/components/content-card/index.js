import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  Card,
  ImageContainer,
  FeaturedImage,
  CardTitle,
  SummaryText,
  HoverShadow,
  Link,
} from './styles';

const ContentCard = ({ data }) => {
  const { featuredImage, title, summaryText } = data;

  return (
    <Card>
      <ImageContainer>
        <FeaturedImage url={featuredImage.file.url} />
        <CardTitle>{title}</CardTitle>
      </ImageContainer>
      <SummaryText>{summaryText}</SummaryText>
      <HoverShadow />
      <Link href="https://england.shelter.org.uk/" />
    </Card>
  );
};

ContentCard.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
  }),
};

export default ContentCard;
