import React from 'react'
import PropTypes from 'prop-types'

import {
  SubpageMenuNav,
  SubpageMenuOl,
  SubpageMenuLi,
  SubpageMenuAnchor,
  SubpageMenuTitle,
} from './styles'

import { Container } from '../styled/containers'

const SubpageMenu = ({ data, activeSlug }) => {
  if (data === null) {
    return null
  }

  const MenuAnchor = ({ itemSlug, title }) => {
    if (activeSlug === itemSlug) {
      return <>{title}</>
    }
    return <SubpageMenuAnchor href={itemSlug}>{title}</SubpageMenuAnchor>
  }

  MenuAnchor.propTypes = {
    itemSlug: PropTypes.string,
    title: PropTypes.string,
  }

  const MenuItem = item => {
    if (item.item.subPages) {
      return (
        <SubpageMenuLi>
          <MenuAnchor itemSlug={item.item.slug} title={item.item.title} />
          <MenuList items={item.item.subPages.subPages} />
        </SubpageMenuLi>
      )
    }
    return (
      <SubpageMenuLi>
        <MenuAnchor itemSlug={item.item.slug} title={item.item.title} />
      </SubpageMenuLi>
    )
  }

  const MenuList = items => {
    const rows = []
    items.items.forEach((item, index) => {
      rows.push(<MenuItem item={item} key={index} />)
    })

    return <SubpageMenuOl>{rows}</SubpageMenuOl>
  }

  const MenuTitle = () => {
    if (data.title) {
      return <SubpageMenuTitle>{data.title}</SubpageMenuTitle>
    }
  }

  return (
    <Container>
      <SubpageMenuNav>
        <MenuTitle />
        <MenuList items={data.pages} />
      </SubpageMenuNav>
    </Container>
  )
}

SubpageMenu.propTypes = {
  data: PropTypes.object,
  activeSlug: PropTypes.string,
}

export default SubpageMenu
