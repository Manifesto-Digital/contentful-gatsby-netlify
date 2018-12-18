import React from 'react'
import 'jest-styled-components'
import {
  renderWithTheme,
  mountWithTheme,
} from '../../../__tests__/helpers/index'
import { formatFilesize } from '../../utils/filesize-formatting'
import DownloadCTA from './index'

it('renders correctly', () => {
  const mockData = {
    buttonText: 'Button text',
    download: global.__FILE_MOCK,
    filePreview: global.__IMAGE_MOCK,
  }

  const tree = renderWithTheme(<DownloadCTA cta={mockData} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays the correct text and size', () => {
  const mockData = {
    buttonText: 'Button text',
    download: global.__FILE_MOCK,
    filePreview: global.__IMAGE_MOCK,
  }

  const wrapper = mountWithTheme(<DownloadCTA cta={mockData} />)
  expect(wrapper.find('a').text()).toBe(
    `${mockData.buttonText}${formatFilesize(
      mockData.download.file.details.size
    )}`
  )
})

it('the download file src is correct', () => {
  const mockData = {
    buttonText: 'Button text',
    download: global.__FILE_MOCK,
    filePreview: global.__IMAGE_MOCK,
  }
  const wrapper = mountWithTheme(<DownloadCTA cta={mockData} />)
  expect(wrapper.find('a').prop('href')).toBe(mockData.download.file.url)
})

it('the download attribute is present', () => {
  const mockData = {
    buttonText: 'Button text',
    download: global.__FILE_MOCK,
    filePreview: global.__IMAGE_MOCK,
  }
  const wrapper = mountWithTheme(<DownloadCTA cta={mockData} />)
  expect(wrapper.find('a').prop('download')).toEqual(true)
})
