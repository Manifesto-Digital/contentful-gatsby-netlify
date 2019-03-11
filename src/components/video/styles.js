import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: ${({ removeMarginBottom, theme }) =>
    removeMarginBottom ? '0' : theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.standard};
  background-color: ${({ theme }) => theme.palette.grey10};
`;

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const BottomText = styled.div`
  margin-top: ${({ theme }) => theme.spacing.standard};

  p:last-child {
    margin-bottom: 0;
  }
`;
