import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import RichText from './index'
import { renderWithTheme } from '../../../__tests__/helpers'
import { createFactory } from '../../utils/test-factories'

// Default props
export const createRichText = createFactory({
  childContentfulRichText: {
    html:
      '<h3>Face-to-face services</h3><p>Our advice and support services across the UK give people <b>one-to-one, personalised help</b> with all of their housing issues.</p>',
  },
})

it('renders correctly', () => {
  const mockData = createRichText()
  const tree = renderWithTheme(<RichText richText={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('only renders items that have content', () => {
  const mockData = createRichText({
    childContentfulRichText: {
      html: '<p></p>',
    },
  })

  const wrapper = shallow(<RichText richText={mockData} />)
  expect(wrapper.getElement()).toBe(null)
})
