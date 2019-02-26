import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../theme/breakpoint';

export const Wrapper = styled.section`
  margin-bottom: ${props => props.theme.spacing.large};
  padding: ${props => props.theme.spacing.xl} 0;
  background-color: ${props => props.theme.palette.grey10};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Flex25 = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.standard};
  background: ${props => props.theme.palette.white};

  &:last-of-type {
    margin-bottom: 0;
  }

  ${breakpoint.mobileLand`
    flex-basis: calc(50% - ${props => props.theme.spacing.small})
  `};

  ${breakpoint.desktop`
      flex: 1;
      width: auto;
      margin-right: ${props => props.theme.spacing.medium};
      margin-bottom: 0;
      
      &:last-of-type {
        margin-right: 0;
    `};
`;

export const Content = styled.div`
  padding: ${props => props.theme.spacing.standard};
  white-space: pre-line;

  p {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h3`
  padding-bottom: ${props => props.theme.spacing.standard};
  border-bottom: 1px solid ${props => props.theme.palette.grey10};
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.headers.h4};
`;

export const Icon = styled(SVG)`
  margin-right: ${props => props.theme.spacing.small};
  display: inline-block;
  height: 20px;
  width: 20px;

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;
