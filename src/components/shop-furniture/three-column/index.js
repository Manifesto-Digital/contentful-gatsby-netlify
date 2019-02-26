import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../../prop-types';
import List from './list';
import RichText from '../../rich-text';
// Styles
import { Wrapper, Flex, Flex25, Flex50 } from './styles';
import { Container } from '../../styled/containers';

const ThreeColumn = ({ yesList, noList, donationHelpText }) => (
  <Wrapper>
    <Container>
      <Flex>
        <Flex25>
          <h3>Yes Please</h3>
          <List items={yesList} type="yes" />
        </Flex25>
        <Flex25>
          <h3>No thanks</h3>
          <List items={noList} type="no" />
        </Flex25>
        <Flex50>
          <h3>How does your donation help?</h3>
          <RichText richText={donationHelpText} />
        </Flex50>
      </Flex>
    </Container>
  </Wrapper>
);

ThreeColumn.propTypes = {
  yesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  noList: PropTypes.arrayOf(PropTypes.string).isRequired,
  donationHelpText: PropTypes.shape(richTextPropTypes).isRequired,
};

export default ThreeColumn;
