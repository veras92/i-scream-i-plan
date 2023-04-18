import { css } from '@emotion/react';
import { modernNormalizeCss } from 'emotion-modern-normalize';
import Coolvetica from '../fonts/Coolvetica/CoolveticaRg-Regular.ttf';
import Inter from '../fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
export const GlobalStyles = css`
  ${modernNormalizeCss}
  @font-face {
    font-family: 'Inter';
    src: url(${Inter});
  }
  @font-face {
    font-family: 'Coolvetica';
    src: url(${Coolvetica});
  }
  :root {
    --main-blue-color: #3e85f3;
    --main-white-color: #fff;

    // BACKGROUND
    --primary-bg-light-color: #dce3e5;
    --secondary-bg-light-color: #ffffff;
    --auth-bg-color: #dcebf7;
    // DARK
    --primary-bg-dark-color: #13151a;
    --secondary-bg-dark-color: #21222c;

    // FONTS
    --main-font-color: #111111;
    // --main-black-color: #111111;

    --main-font-family: 'Inter', sans-serif;
    --sidebar-title-font: 'Coolvetica', sans-serif;

    --primary-font-size: 0.9375rem;
    --primary-font-weight: 500;
    --primary-line-height: 1.125rem;

    --secondary-font-size: 2rem;
    --secondary-font-weight: 700;
    --secondary-line-height: 2rem;

    // BUTTONS
    --low-btn-color: #72c2f8;
    --medium-btn-color: #f3b249;
    --high-btn-color: #ea3d65;
    /* --low-priority-color: #72c2f8; */
    /* --medium-priority-color: #f3b249; */
    /* --high-priority-color: #ea3d65; */
  }

  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: var(--main-font-family);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    transform: scale(1);
    transition: transform 0.2s linear;
    &:active {
      transform: scale(0.97);
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
