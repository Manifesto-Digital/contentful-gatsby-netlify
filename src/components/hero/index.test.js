import React from 'react'
import renderer from 'react-test-renderer'
import Hero from './index'

it('renders correctly', () => {
  const mockData = {
    title: 'hello',
    subtitle: 'subtitle',
    blackText: true,
    image: 'sdfgsd',
  }
  const tree = renderer.create(<Hero content={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})
