import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

export const Wrapper = styled.div`
  margin-bottom: ${({ theme, removeBottomMargin }) =>
    removeBottomMargin ? '0' : theme.spacing.large};
`;

export const Table = styled.div`
  margin-bottom: 5px;
  padding: ${({ theme }) => theme.spacing.standard};
`;

export const TableList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.standard};
  list-style-type: square;
`;

export const OpeningStatement = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.standard};
`;

export const Block = styled.div`
  margin: ${({ theme }) => theme.spacing.xl} auto;
`;

export const BlockTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;

export const BlockContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const ReferenceList = styled.ul`
  padding-left: 0;
  margin-left: 0;
  list-style: none;
  font-size: ${({ theme }) => theme.fontsize.small};

  ${breakpoint.desktop`
    margin-left: -25px;
  `};

  a {
    margin-right: ${({ theme }) => theme.spacing.small};
  }

  li {
    display: flex;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export const SidebarInner = styled.div`
  padding: ${({ theme }) => theme.spacing.large} 0;
`;

export const FootNotes = styled.div`
  padding-top: ${({ theme }) => theme.spacing.large};
  background: ${({ theme }) => theme.palette.offWhite};
`;

export const FootNotesTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.medium};
`;
