import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../prop-types';
// Styles
import { Grid, Item, ItemsWrapper } from './styles';
import { Container } from '../styled/containers';

const ContentGrid = ({ content }) => {
  const { grid1, grid2, grid3, grid4 } = content;

  return (
    <Grid>
      <Container>
        <ItemsWrapper>
          <Item richText={grid1} />
          <Item richText={grid2} />
          <Item richText={grid3} />
          <Item richText={grid4} />
        </ItemsWrapper>
      </Container>
    </Grid>
  );
};
ContentGrid.propTypes = {
  content: PropTypes.shape({
    grid1: PropTypes.shape(richTextPropTypes),
    grid2: PropTypes.shape(richTextPropTypes),
    grid3: PropTypes.shape(richTextPropTypes),
    grid4: PropTypes.shape(richTextPropTypes),
  }),
};

export default ContentGrid;
