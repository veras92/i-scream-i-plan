import 'react-toastify/dist/ReactToastify.css';
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
    &:disabled {
      background-color: #ccc;
      color: #666;
      transform: none;
      outline: none;
    }
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__day.react-datepicker__day--keyboard-selected {
    border: none;
    border-radius: 7px;
    background-color: var(--dark);
    color: var(--white);
  }

  .react-datepicker__day.react-datepicker__day--keyboard-selected:hover {
    border: none;
    border-radius: 7px;
    background-color: var(--dark);
    color: var(--white);
  }

  .react-datepicker-popper .react-datepicker__navigation {
    padding-top: 12px;
    color: #000;
  }

  .react-datepicker {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.189);
    border: none !important;
    font-family: 'Inter' !important;
  }

  .react-datepicker__header {
    border-bottom: solid 5px var(--light) !important;
    background: white !important;
  }

  .react-datepicker__current-month {
    color: var(--dark) !important;
  }

  .react-datepicker__day.react-datepicker__day--today {
    border-radius: 7px;
    border: solid 2px var(--brand) !important;
    background-color: white !important;
    color: var(--dark) !important;
    width: 30px;
    height: 30px;
  }

  .react-datepicker__day.react-datepicker__day--selected {
    border: none;
    border-radius: 7px;
    background-color: black;
    color: white;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    border: none;
    border-radius: 7px !important;
    background-color: var(--brand) !important;
    color: var(--dark) !important;
  }
`;
