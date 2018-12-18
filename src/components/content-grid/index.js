import React from 'react'
import PropTypes from 'prop-types'
import { richTextPropTypes } from '../../prop-types'
// Styles
import { Grid, Item, ItemsWrapper } from './styles'
import { Container } from '../styled/containers'

const ContentGrid = ({ content }) => {
  const { grid1, grid2, grid3, grid4 } = content

  const hasContent = item =>
    item &&
    item.childContentfulRichText.html &&
    item.childContentfulRichText.html !== '<p></p>' // gatsby-transformer-contentful-richtext still includes an empty p if an editor clears the rich text

  const createMarkup = markupToRender => ({ __html: markupToRender })

  return (
    <Grid>
      <Container>
        <ItemsWrapper>
          {hasContent(grid1) && (
            <Item
              dangerouslySetInnerHTML={createMarkup(
                grid1.childContentfulRichText.html
              )}
            />
          )}
          {hasContent(grid2) && (
            <Item
              dangerouslySetInnerHTML={createMarkup(
                grid2.childContentfulRichText.html
              )}
            />
          )}
          {hasContent(grid3) && (
            <Item
              dangerouslySetInnerHTML={createMarkup(
                grid3.childContentfulRichText.html
              )}
            />
          )}
          {hasContent(grid4) && (
            <Item
              dangerouslySetInnerHTML={createMarkup(
                grid4.childContentfulRichText.html
              )}
            />
          )}
        </ItemsWrapper>
      </Container>
    </Grid>
  )
}
ContentGrid.propTypes = {
  content: PropTypes.shape({
    grid1: PropTypes.shape(richTextPropTypes),
    grid2: PropTypes.shape(richTextPropTypes),
    grid3: PropTypes.shape(richTextPropTypes),
    grid4: PropTypes.shape(richTextPropTypes),
  }),
}

export default ContentGrid
