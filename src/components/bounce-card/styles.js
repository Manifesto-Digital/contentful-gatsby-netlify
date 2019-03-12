import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.palette.offWhite};
  padding: ${({ theme }) => theme.spacing.standard};
  font-size: ${({ theme }) => theme.fontsize.tiny};

  img {
    width: 45px;
    height: 76px;
    margin-right: ${({ theme }) => theme.spacing.small};
  }

  div {
    white-space: pre-line;
  }

  a {
    text-decoration: none;
  }
`;
