import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../../theme/breakpoint';

export const Wrapper = styled.section`
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Flex25 = styled.div`
  width: 100%;
  margin-bottom: ${props => props.theme.spacing.standard};

  ${breakpoint.mobileLand`
        width: 50%;
        padding-right: ${props => props.theme.spacing.standard};
    `};
  ${breakpoint.desktop`
        width: 25%;
        padding-right: ${props => props.theme.spacing.standard};
    `};
`;

export const Flex50 = styled.div`
  width: 100%;

  ${breakpoint.desktop`
        width: 50%;
        padding-left: ${props => props.theme.spacing.standard};
    `};
`;

export const UnorderedList = styled.ul`
  padding: 0;
  margin-bottom: 0;
`;

export const ListItem = styled.li`
  position: relative;
  list-style: none;
  position: relative;
  margin-bottom: 5px;
  padding-left: ${props => props.theme.spacing.standard};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ListIcon = styled(SVG)`
  margin-right: ${props => props.theme.spacing.small};
  position: absolute;
  top: 0;
  left: 0;

  svg {
    width: 10px;
  }

  path {
    fill: ${props => props.theme.palette.primary};
  }
`;
