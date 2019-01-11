import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import { Title, Wrapper, ListWrapper, ListItem, ArrowSVG } from './styles';
import ArrowRight from '../../assets/svg/icons/arrow-right.svg';

const RelatedAdvice = ({ data }) => {
  const { headerText, itemsPerRow, links } = data;
  return (
    <Container>
      <Wrapper>
        <Title>{headerText}</Title>
        <ListWrapper>
          {links.map((link, i) => (
            <ListItem key={i} rowCount={itemsPerRow} href={link.slug}>
              {link.title}
              <ArrowSVG src={ArrowRight} cacheGetRequests />
            </ListItem>
          ))}
        </ListWrapper>
      </Wrapper>
    </Container>
  );
};

RelatedAdvice.propTypes = {
  data: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    itemsPerRow: PropTypes.number.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      })
    ),
  }),
};

export default RelatedAdvice;
