import styled from 'styled-components';
import { breakpoint } from '../theme/breakpoint';

import theme from '../theme/variables';

export const Table = styled.div`
  margin-bottom: 5px;
  padding: ${theme.spacing.standard};
  background: ${theme.palette.offWhite};
`;

export const TableList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

export const Block = styled.div`
  margin: ${theme.spacing.xl} auto;
`;

export const BlockTitle = styled.h3`
  margin-bottom: ${theme.spacing.medium};
`;

export const BlockContent = styled.div`
  margin-bottom: ${theme.spacing.large};
`;

export const ReferenceList = styled.ul`
  padding-left: 0;
  margin-left: 0;
  list-style: none;
  font-size: ${theme.fontsize.small};

  ${breakpoint.tablet`
    margin-left: -${theme.spacing.medium};
  `};

  a {
    margin-right: ${theme.spacing.small};
  }

  li {
    display: flex;
  }

  p {
    margin-bottom: ${theme.spacing.small};
  }
`;

export const FootNotes = styled.div`
  padding: ${theme.spacing.large} 0;
  background: ${theme.palette.offWhite};
`;

export const FootNotesTitle = styled.h3`
  margin-bottom: ${theme.spacing.medium};
`;
