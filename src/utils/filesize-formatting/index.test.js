import { formatFilesize } from './index'

it('shows the correct human readable filesize', () => {
  expect(formatFilesize(156000)).toEqual('156 KB')
  expect(formatFilesize(12345000)).toEqual('12.35 MB')
})

it('returns 0 bytes if 0 provied', () => {
  expect(formatFilesize(0)).toEqual('0 Bytes')
})

it('throws an error if bytes are negative', () => {
  expect(() => formatFilesize(-100)).toThrow()
})

it('throws an error if bytes are too large', () => {
  expect(() => formatFilesize(10 ** 27)).toThrow()
})

it('throws an error if bytes are not provided', () => {
  expect(() => formatFilesize()).toThrow()
})
