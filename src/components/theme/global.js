import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { breakpoint } from './breakpoint'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        height: 100%;
        scroll-behavior: smooth !important;
    }

    body {
        min-height: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.fonts.primary};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${props => props.theme.fonts.header};
    }

    h1, h2, h3 {
        line-height: 1.25;
    }



    h1 {
        font-size:  ${props => props.theme.headers.h2};

        ${breakpoint.tablet`
            font-size:  ${props => props.theme.headers.h1};
        `};
    }

    h2 {
        font-size:  ${props => props.theme.headers.h3};

        ${breakpoint.tablet`
            font-size:  ${props => props.theme.headers.h1};
        `};
    }
    h3 {
        font-size:  ${props => props.theme.headers.h4};

        ${breakpoint.tablet`
            font-size:  ${props => props.theme.headers.h3};
        `};
    }

    img {
        max-width: 100%;
    }

    a {
        color: ${props => props.theme.palette.link};
    }

`
