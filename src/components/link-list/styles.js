import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { removeListStyles } from '../styled/utils';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme, removeBottomMargin }) =>
    removeBottomMargin ? '0' : theme.spacing.large};
`;

export const UnorderedList = styled.ul`
  ${removeListStyles};

  li {
    margin-bottom: 5px;
  }
`;

export const DownloadLink = styled.a``;

export const FileInfo = styled.span`
  margin-left: ${({ theme }) => theme.spacing.small};
`;

export const DownloadSVG = styled(SVG)`
  display: inline-block;
  vertical-align: text-bottom;
  margin-right: ${({ theme }) => theme.spacing.small};

  svg {
    width: 20px;
  }
`;
