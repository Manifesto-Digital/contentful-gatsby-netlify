import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import theme from '../../src/components/theme/variables'

export const renderWithTheme = component =>
  renderer.create(<ThemeProvider theme={theme}>{component}</ThemeProvider>)

export const mountWithTheme = component =>
  mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
