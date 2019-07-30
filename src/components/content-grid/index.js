import React from 'react';
import PropTypes from 'prop-types';
import { richTextPropTypes } from '../../prop-types';
// Styles
import { Header, Grid, Item, ItemsWrapper } from './styles';
import { Container } from '../styled/containers';

const ContentGrid = ({ content }) => {
  const { border, heading, grid1, grid2, grid3, grid4 } = content;
  const contentArray = [grid1, grid2, grid3, grid4];

  console.log(heading);

  return (
    <Grid>
      <Container>
        {heading && <Header>heading</Header>}
        <ItemsWrapper>
          {contentArray.map((gridContent, i) => (
            <Item key={i} richText={gridContent} border={border} />
          ))}
        </ItemsWrapper>
      </Container>
    </Grid>
  );
};
ContentGrid.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string,
    grid1: PropTypes.shape(richTextPropTypes),
    grid2: PropTypes.shape(richTextPropTypes),
    grid3: PropTypes.shape(richTextPropTypes),
    grid4: PropTypes.shape(richTextPropTypes),
    border: PropTypes.bool,
  }),
};

export default ContentGrid;
