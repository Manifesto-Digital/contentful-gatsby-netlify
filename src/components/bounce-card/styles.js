import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.offWhite};
  padding: ${({ theme }) => theme.spacing.standard};
  font-size: ${({ theme }) => theme.fontsize.small};
  margin-bottom: ${({ theme }) => theme.spacing.standard};

  img {
    width: 45px;
    height: 76px;
    margin-right: ${({ theme }) => theme.spacing.small};
  }

  div {
    white-space: pre-line;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  a {
    text-decoration: none;
  }
`;
