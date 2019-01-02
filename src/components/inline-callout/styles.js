import styled from 'styled-components'

export const InlineBanner = styled.div`
  position: relative;
  clear: both;
  background: ${props => props.theme.palette.greyLight};
  padding: ${props => props.theme.spacing.padding};
  margin-bottom: 1em;
  border-left: 4px solid;
  border-color: ${props => props.theme.palette.primary};

  & > :last-child {
    margin-bottom: 0;
  }
`
