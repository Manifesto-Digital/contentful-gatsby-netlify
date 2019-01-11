import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Container } from '../styled/containers';
import { Wrapper, ListWrapper, ListItem } from './styles';

const RelatedAdvice = ({ data }) => {
  const { headerText, itemsPerRow, links } = data;
  return (
    <Container>
      <Wrapper>
        <h2>{headerText}</h2>
        <ListWrapper>
          {links.map((link, i) => (
            <ListItem key={i} rowCount={itemsPerRow}>
              <Link to={link.slug}>{link.title}</Link>
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
