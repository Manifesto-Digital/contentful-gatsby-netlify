import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  Card,
  ImageContainer,
  CardTitle,
  CardImage,
  SummaryText,
  HoverShadow,
  Link,
} from './styles';

const ContentCard = ({ data }) => {
  const { featuredImage, cropImageFrom, title, summaryText, slug } = data;

  return (
    <Card>
      <ImageContainer>
        <CardImage
          mobileW={600}
          mobileH={350}
          desktopW={600}
          desktopH={350}
          fit="fill"
          focusArea={cropImageFrom}
          image={featuredImage}
        />
        <CardTitle>{title}</CardTitle>
      </ImageContainer>
      <SummaryText>{summaryText}</SummaryText>
      <HoverShadow />
      <Link href={slug} />
    </Card>
  );
};

ContentCard.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.string,
  }),
};

export default ContentCard;
