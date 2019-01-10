import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../styled/containers';
import { Wrapper, ListWrapper, StyledLink } from './styles';

const LinkBox = ({ data }) => {
  const { headerText, itemsPerRow, links } = data;
  return (
    <Container>
      <Wrapper>
        <h2>{headerText}</h2>
        <ListWrapper>
          {links.map((link, i) => (
            <StyledLink key={i} to={link.slug} rowcount={itemsPerRow}>
              {link.title}
            </StyledLink>
          ))}
        </ListWrapper>
      </Wrapper>
    </Container>
  );
};

LinkBox.propTypes = {
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

export default LinkBox;
