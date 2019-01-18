import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../image/responsive.js';
// Styles
import {
  Card,
  ImageContainer,
  CardTitle,
  SummaryText,
  HoverShadow,
  Link,
} from './styles';

const ContentCard = ({ data }) => {
  const { featuredImage, title, summaryText, slug } = data;

  return (
    <Card>
      <ImageContainer>
        <ResponsiveImage
          mobileW={400}
          mobileH={200}
          desktopW={400}
          desktopH={200}
          fit="fill"
          focusArea="left"
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
