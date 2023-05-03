import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    html, body, #root {
        height: calc(100vh - 5rem);
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 10px;

        @media screen and (max-width: 1680px) {
        font-size: 9.5px;
        }

        @media screen and (max-width: 1366px) {
        font-size: 9px;
        }
    }

    body, input, button, textarea {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
    }

    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            opacity: 0.8;
        }
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a, u, p, ul, li {
        font-size: 1.4rem;
    }

    .active-menu {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
    }

    #root {
        margin-top: 5rem;
    }

    .ReactModal__Overlay {
        z-index: 100;
        background-color: ${({ theme }) =>
          theme.colors.blackOpacity} !important;
    }

    .ReactModal__Content {
        padding: 0 !important;
        margin: 5% auto;
        min-width: 80rem;
        width: fit-content;
        max-width: 50rem;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-height: 60rem;
        overflow-y: scroll;
    }

    .Toastify__toast-icon {
        svg {
            fill: ${({ theme }) => theme.colors.white};
        }
    }

    .Toastify__toast--error {
        background-color: ${({ theme }) => theme.colors.danger} !important;
    }

    .Toastify__toast--success {
        background: ${({ theme }) => theme.colors.success};
    }

    .Toastify__progress-bar {
        background-color: rgb(255, 255, 255, 0.4);
    }

    .Toastify__close-button {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.7;

        &:hover {
        opacity: 1;
        }
    }

    .Toastify__toast {
        border-radius: 0.3rem;
    }

    .Toastify__toast-body {
        font-size: 1.3rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.white};
    }

    .react-select--is-disabled {
    > .react-select__control {
        border-color: ${({ theme }) => theme.colors.disabled} !important;
    }
    }

    .react-select__value-container {
        padding: 1.1rem 0 1.8rem 0 !important;
    }

    .react-select__control {
        border-color: ${({ theme }) => theme.colors.secondary} !important;
        background-color: transparent !important;
        border-top: 0 !important;
        border-left: 0 !important;
        border-right: 0 !important;
        border-radius: 0 !important;
    }

    .react-select__control--is-focused {
        border-top: 0 !important;
        border-left: 0 !important;
        border-right: 0 !important;
        border-radius: 0 !important;
    }

    .react-select__option {
        font-size: 1.3rem !important;
    }

    .react-select__menu {
        z-index: 10000 !important;

        > * {
            max-height: 10rem !important;
        }
    }

    .react-select__indicator-separator {
        display: none !important;
    }

    .css-t3ipsp-control:hover,
    .css-t3ipsp-control {
        border-color: transparent !important;
        box-shadow: none !important;
        border-top: 0 !important;
        border-bottom: 1px solid ${({ theme }) =>
          theme.colors.secondary} !important;
        border-left: 0 !important;
        border-right: 0 !important;
        border-radius: 0 !important;
    }

    .react-select__single-value, .react-select__placeholder {
        font-size: 1.3rem;
    }

    ::-webkit-scrollbar {
        width: 0.4rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        transition: 2s;
        background: ${({ theme }) => theme.colors.secondary}; 
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.secondaryOpacity}; 
    }
`;
