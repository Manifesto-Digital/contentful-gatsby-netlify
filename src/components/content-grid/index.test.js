import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import { renderWithTheme } from '../../../__tests__/helpers/index'
import Grid from './index'
import { Item } from './styles'

it('renders correctly', () => {
  const mockContent = {
    grid1: {
      childContentfulRichText: {
        html:
          '<p>Our advice and support services across the UK give people <b>one-to-one</p>',
      },
    },
    grid2: {
      childContentfulRichText: {
        html:
          '<p>Our advice and support services across the UK give people <b>one-to-one</p>',
      },
    },
    grid3: {
      childContentfulRichText: {
        html:
          '<p>Our advice and support services across the UK give people <b>one-to-one</p>',
      },
    },
    grid4: {
      childContentfulRichText: {
        html:
          '<p>Our advice and support services across the UK give people <b>one-to-one</p>',
      },
    },
  }

  const tree = renderWithTheme(<Grid content={mockContent} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('only renders items that have content', () => {
  const mockContent = {
    grid1: {
      childContentfulRichText: {
        html:
          '<p>Our advice and support services across the UK give people <b>one-to-one</p>',
      },
    },
    grid2: {
      childContentfulRichText: {
        html: '<p></p>',
      },
    },
  }

  const wrapper = shallow(<Grid content={mockContent} />)
  expect(wrapper.find(Item)).toHaveLength(1)
})
