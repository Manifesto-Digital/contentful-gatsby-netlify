import React from 'react';
import PropTypes from 'prop-types';
import LinkHandler from '../link-handler';
import { Container } from '../styled/containers';
import { Wrapper, ListWrapper, ListItem } from './styles';

const LinkBox = ({ data }) => {
  const { headerText, itemsPerRow, links } = data;

  return (
    <Container>
      <Wrapper>
        <h2>{headerText}</h2>
        <ListWrapper>
          {links &&
            links.map((link, i) => (
              <ListItem key={i} rowCount={itemsPerRow}>
                <LinkHandler link={link}>{link.title}</LinkHandler>
              </ListItem>
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
