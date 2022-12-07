import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1 {
        font-size: ${(props) => props.theme['title-xl']};
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        color: ${(props) => props.theme.title};
    }

    h2 {
        font-size: ${(props) => props.theme['title-l']};
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        color: ${(props) => props.theme.subtitle};
    }

    h3 {
        font-size: ${(props) => props.theme['title-m']};
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        color: ${(props) => props.theme.subtitle};
    }

    h4 {
        font-size: ${(props) => props.theme['title-s']};
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        color: ${(props) => props.theme.subtitle};
    }

    h5 {
        font-size: ${(props) => props.theme['title-xs']};
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        color: ${(props) => props.theme.subtitle};
    }

`
