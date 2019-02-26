import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../../prop-types';
import RichText from '../../rich-text';
import iconSrc from '../../../utils/iconSrc';
// Styles
import { Wrapper, Flex, Flex25, Content, Icon, Heading } from './styles';
import { Container } from '../../styled/containers';

const ShopInfo = ({ address, openingHours, parking, disabledAccess }) => {
  const information = [
    { heading: 'Address', icon: 'map-marker', richText: address },
    { heading: 'Opening hours', icon: 'clock', richText: openingHours },
    { heading: 'Parking', icon: 'car', richText: parking },
    {
      heading: 'Disabled access',
      icon: 'wheelchair',
      richText: disabledAccess,
    },
  ];
  return (
    <Wrapper>
      <Container>
        <Flex>
          {information &&
            information.map((item, i) => (
              <Flex25 key={i}>
                <Content>
                  <Heading>
                    <Icon src={iconSrc(item.icon)} />
                    {item.heading}
                  </Heading>
                  <RichText richText={item.richText} />
                </Content>
              </Flex25>
            ))}
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
