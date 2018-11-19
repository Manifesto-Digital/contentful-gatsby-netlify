import React from 'react'
import PropTypes from 'prop-types'
// Components
import Paragraph from './paragraph'
import Underline from './underline'
import UnorderedList from './unordered-list'
import OrderedList from './ordered-list'
import Header from './header'
// Styles
import { Section } from '../styled/sections'

const RichText = ({ richText }) => {
  const { content: allContent } = richText

  const hasContent = allContent && allContent.length > 0
  return (
    <Section>
      {hasContent &&
        allContent.map((block, i) => {
          if (block.nodeType.includes('heading-'))
            return (
              <Header content={block.content} type={block.nodeType} key={i} />
            )
          if (block.nodeType === 'paragraph')
            return <Paragraph content={block.content} key={i} />
          if (block.nodeType === 'underline')
            return <Underline content={block.content} key={i} />
          if (block.nodeType === 'ordered-list')
            return <OrderedList content={block.content} key={i} />
          if (block.nodeType === 'unordered-list')
            return <UnorderedList content={block.content} key={i} />
          return null
        })}
    </Section>
  )
}

RichText.propTypes = {
  richText: PropTypes.shape({
    content: PropTypes.array,
  }),
}

export default RichText
