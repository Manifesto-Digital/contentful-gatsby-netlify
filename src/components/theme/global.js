import { createGlobalStyle } from 'styled-components'
import { reset } from './reset'
import { breakpoint } from './breakpoint'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        height: 100%;
        scroll-behavior: smooth !important;
<<<<<<< HEAD
=======
        ${breakpoint.tablet`
            font-size:  115%;
        `};
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
    }

    body {
        min-height: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: ${props => props.theme.fonts.primary};
<<<<<<< HEAD
=======
        color: ${props => props.theme.palette.secondary};
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
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

<<<<<<< HEAD
    img {
        max-width: 100%;
    }

    a {
        color: ${props => props.theme.palette.link};
    }

    h1 {
        font-size:  ${props => props.theme.headers.h2};

=======


    h1 {
        font-size:  ${props => props.theme.headers.h2};
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
        ${breakpoint.tablet`
            font-size:  ${props => props.theme.headers.h1};
        `};
    }

    h2 {
        font-size:  ${props => props.theme.headers.h3};
<<<<<<< HEAD

=======
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
        ${breakpoint.tablet`
            font-size:  ${props => props.theme.headers.h1};
        `};
    }
    h3 {
        font-size:  ${props => props.theme.headers.h4};
<<<<<<< HEAD

=======
>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
        ${breakpoint.tablet`
            font-size:  ${props => props.theme.headers.h3};
        `};
    }

<<<<<<< HEAD
=======
    img {
        max-width: 100%;
    }

    a {
        color: ${props => props.theme.palette.link};
    }

    li {
        margin-bottom: .5rem;
    }

>>>>>>> cd4ba4249a6699a6ba039d07ff006ab8f1bec027
`
