import React from 'react'
import PropTypes from 'prop-types'

import {
  SubpageNextPrevButtonWrap,
  SubpageNextPrevAnchor,
  SubpageNextPrevAnchorSpan,
  SubpageNextPrevWrap,
} from './styles'

import { Container } from '../styled/containers'

const getActiveSlugIndex = (pages, activeSlug) => {
  let index = -1

  pages.forEach((page, key) => {
    if (page.slug === activeSlug) {
      index = key
    }
  })

  return index
}

const getNext = (pages, activeIndex) => {
  if (typeof pages[activeIndex + 1] === 'undefined') {
    return null
  }

  return pages[activeIndex + 1]
}

const getPrev = (pages, activeIndex) => {
  if (typeof pages[activeIndex - 1] === 'undefined') {
    return null
  }

  return pages[activeIndex - 1]
}

const SubpageNextPrev = ({ data, activeSlug }) => {
  if (data === null) return null

  const { pages } = data
  const activeIndex = getActiveSlugIndex(pages, activeSlug)

  if (activeIndex === -1) {
    return null
  }

  const prevData = getPrev(pages, activeIndex)
  const nextData = getNext(pages, activeIndex)

  const SubpageNextPrevButton = ({ title, buttonData }) => {
    if (buttonData === null) {
      return null
    }

    return (
      <SubpageNextPrevButtonWrap>
        <SubpageNextPrevAnchor href={buttonData.slug}>
          <SubpageNextPrevAnchorSpan title={title}>
            <span>{title}</span>
          </SubpageNextPrevAnchorSpan>
          <span>{buttonData.title}</span>
        </SubpageNextPrevAnchor>
      </SubpageNextPrevButtonWrap>
    )
  }

  SubpageNextPrevButton.propTypes = {
    title: PropTypes.string,
    buttonData: PropTypes.object,
  }

  return (
    <Container>
      <SubpageNextPrevWrap>
        <SubpageNextPrevButton title="Prev" buttonData={prevData} />
        <SubpageNextPrevButton title="Next" buttonData={nextData} />
      </SubpageNextPrevWrap>
    </Container>
  )
}

SubpageNextPrev.propTypes = {
  activeSlug: PropTypes.string,
  data: PropTypes.object,
}

export default SubpageNextPrev
