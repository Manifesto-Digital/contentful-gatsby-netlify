import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.small}
    ${props => props.theme.spacing.standard};
  background-color: ${props => props.theme.palette.grey45};
  color: ${props => props.theme.palette.white};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const FileInfo = styled.div`
  font-size: 0.65em;
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.small};

  &:last-child {
    margin-right: 0;
  }
`;

export const ButtonText = styled.div`
  margin-bottom: 5px;
`;

export const ButtonSVG = styled(SVG)`
  display: block;
  fill: ${props => props.theme.palette.white};
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  ${breakpoint.tablet`
    width: 25px;
    height: 25px;
  `}
`;
