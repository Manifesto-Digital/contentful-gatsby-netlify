import React from 'react'
import renderer from 'react-test-renderer'
import GetInTouch from './index'

it('renders correctly', () => {
  const tree = renderer.create(<GetInTouch />).toJSON()
  expect(tree).toMatchSnapshot()
})
