import styled from 'styled-components';
import DownloadCTA from '../download-cta';

export const PolicyCard = styled.div`
  background-color: ${({ theme }) => theme.palette.grey10};
  padding: ${({ theme }) => theme.spacing.standard};
  box-shadow: ${({ theme }) => theme.boxshadow.small};
  margin-bottom: ${({ theme }) => theme.spacing.standard};
  display: flex;
  flex-wrap: wrap;
`;

export const Detail = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  margin-right: ${({ theme }) => theme.spacing.medium};

  &:last-child {
    margin-left: 0;
  }
`;

export const DocumentDownload = styled(DownloadCTA)`
  min-width: 75%;
`;
