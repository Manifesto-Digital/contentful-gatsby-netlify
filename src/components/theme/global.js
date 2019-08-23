import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';
import { breakpoint } from './breakpoint';
import { linkStyles } from '../styled/links';
import { HeaderWrapper } from '../header/styles';
import { SideBar } from '../styled/containers';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        height: 100%;
        font-size:16px;
        scroll-behavior: smooth !important;
        ${breakpoint.tablet`
            font-size:  115%;
        `};
    }

    body {
        min-height: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ theme }) => theme.palette.black};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${({ theme }) => theme.fonts.header};
        font-weight: 500;
    }

    h1, h2, h3 {
        line-height: 1.25;
    }

    h1 {
        font-size:  ${({ theme }) => theme.headers.h2};
        ${breakpoint.tablet`
            font-size:  ${({ theme }) => theme.headers.h1};
            line-height: 1.15;
        `};
    }

    h2 {
        font-size:  ${({ theme }) => theme.headers.h3};
        ${breakpoint.tablet`
            font-size:  ${({ theme }) => theme.headers.h2};
        `};
    }
    h3 {
        font-size:  ${({ theme }) => theme.headers.h4};
        ${breakpoint.tablet`
            font-size:  ${({ theme }) => theme.headers.h3};
        `};
    }

    img {
        max-width: 100%;
    }

    a {
        ${linkStyles};
    }

    li {
        margin-bottom: .5rem;
    }

    ol {
        list-style: none;
        padding-left: 0;
    }

    ol li{
        counter-increment: step-counter;
        position: relative;
        padding-left: 2em;
    }

    ol li:before {
        content: counter(step-counter);
        display: block;
        font-size: inherit;
        left: .6em;
        min-width: 1em;
        position: absolute;
        text-align: center;
        top: 0;
    }
    .embedded-in-richtext {
        margin-bottom: ${({ theme }) => theme.spacing.standard};
    }

    .ReactModal__Body--open {
        overflow: hidden;
        position: fixed;
        width: 100%;
        height: 100%;
    }

    @media print {
        ${HeaderWrapper}, ${SideBar}, nav {
            display: none !important;
        }
        *  {
            color: ${({ theme }) => theme.palette.black} !important;
        }
    }
`;
