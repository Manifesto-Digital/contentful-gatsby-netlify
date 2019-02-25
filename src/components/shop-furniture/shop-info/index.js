import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../../prop-types';
import RichText from '../../rich-text';
import iconSrc from '../../../utils/iconSrc';
// Styles
import { Wrapper, Flex, Flex25, Content, Icon, Heading } from './styles';
import { Container } from '../../styled/containers';

const ShopInfo = ({ address, openingHours, parking, disabledAccess }) => {
  console.log('woo');

  return (
    <Wrapper>
      <Container>
        <Flex>
          <Flex25>
            <Content>
              <Heading>
                <Icon src={iconSrc('map-marker')} />
                Address
              </Heading>
              <RichText richText={address} />
            </Content>
          </Flex25>
          <Flex25>
            <Content>
              <Heading>
                <Icon src={iconSrc('clock')} />
                Opening hours
              </Heading>
              <RichText richText={openingHours} />
            </Content>
          </Flex25>
          <Flex25>
            <Content>
              <Heading>
                <Icon src={iconSrc('car')} />
                Parking
              </Heading>
              <RichText richText={parking} />
            </Content>
          </Flex25>
          <Flex25>
            <Content>
              <Heading>
                <Icon src={iconSrc('wheelchair')} />
                Disabled access
              </Heading>
              <RichText richText={disabledAccess} />
            </Content>
          </Flex25>
        </Flex>
      </Container>
    </Wrapper>
  );
};

ShopInfo.propTypes = {
  address: PropTypes.shape(richTextPropTypes).isRequired,
  openingHours: PropTypes.shape(richTextPropTypes).isRequired,
  parking: PropTypes.shape(richTextPropTypes).isRequired,
  disabledAccess: PropTypes.shape(richTextPropTypes).isRequired,
};

export default ShopInfo;
