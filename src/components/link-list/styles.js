import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';
import { breakpoint } from '../theme/breakpoint';
import { squareBulletPoints } from '../styled/lists';
import { removeListStyles } from '../styled/utils';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme, removeBottomMargin }) =>
    removeBottomMargin ? '0' : theme.spacing.large};
`;

export const UnorderedList = styled.ul`
  ${({ showListStyle }) =>
    !showListStyle &&
    css`
      ${removeListStyles};

      & > li {
        margin: 0;
      }
    `}

  ${({ showListStyle }) =>
    showListStyle &&
    css`
      ${squareBulletPoints};
    `}

  ${breakpoint.tablet`
    ${({ columns }) =>
      columns &&
      css`
        display: ${columns && 'grid'};
        grid-template-columns: ${columns && `repeat(${columns}, 1fr)`};
        grid-gap: ${({ theme }) => theme.spacing.standard};
      `}
    `};

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
