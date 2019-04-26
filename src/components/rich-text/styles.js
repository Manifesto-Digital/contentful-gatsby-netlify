import styled, { css } from 'styled-components';
import { squareBulletPoints } from '../styled/lists';
import { quoteStyles } from '../styled/quote';
import QuoteLeft from '../../assets/svg/icons/quote-left-solid-red.svg';

export const Wrapper = styled.div`
  ${({ sidebar, theme }) =>
    sidebar &&
    css`
      background-color: ${theme.palette.grey10};
      padding: ${theme.spacing.standard};
      margin-bottom: ${theme.spacing.standard};
    `}
  ul {
    ${squareBulletPoints};
  }

  ol li::before {
    min-width: 10px;
  }

  blockquote {
    ${quoteStyles};

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 30px;
      height: 30px;
      background-image: url(${QuoteLeft});
      top: ${({ theme }) => theme.spacing.small};
      left: ${({ theme }) => theme.spacing.standard};
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;

export const ModuleWrapper = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
