import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {
  Wrapper,
  FlexWrapper,
  Content,
  SubHeading,
  HeroImage,
  StyledImage,
} from './styles';
import { Container } from '../../styled/containers';

const ShopHero = ({
  header,
  subHeader,
  contactNumber,
  introductoryText,
  image,
}) => (
  <Wrapper>
    <Container>
      <h1>{header}</h1>
      <FlexWrapper>
        <Content>
          <h3>{subHeader}</h3>
          <SubHeading>
            Call us on: <span>{contactNumber}</span>
          </SubHeading>
          <p>{introductoryText}</p>
        </Content>
        <HeroImage>
          <StyledImage image={image} />
        </HeroImage>
      </FlexWrapper>
    </Container>
  </Wrapper>
);

ShopHero.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  introductoryText: PropTypes.string.isRequired,
  image: PropTypes.object,
};

export default ShopHero;
