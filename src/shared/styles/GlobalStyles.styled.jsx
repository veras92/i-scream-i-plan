import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { modernNormalizeCss } from 'emotion-modern-normalize';
import { DEVICE_SIZE_PX } from 'shared/services/deviceWidth';

export const GlobalStyles = css`
  ${modernNormalizeCss}

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

export const Container = styled.div`
  @media screen and (min-width: ${DEVICE_SIZE_PX.mobile}) {
  }

  @media screen and (min-width: ${DEVICE_SIZE_PX.tablet}) {
  }

  @media screen and (min-width: ${DEVICE_SIZE_PX.desktop}) {
  }
`;

// @mixin visually-hidden {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   margin: -1px;
//   border: 0;
//   padding: 0;

//   white-space: nowrap;
//   clip-path: inset(100%);
//   clip: rect(0 0 0 0);
//   overflow: hidden;
// }

export const MainInput = styled.input`
  height: 54px;
  width: 100%;
  padding-left: 18px;

  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: var(--main-black-color);

  background: none;
  border: 1px solid #dce3e599;
  border-radius: 8px;

  &::placeholder {
    color: #dce3e5;
  }

  &:focus {
    outline: 2px solid darkgrey;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 148px);
  min-height: 752px;
  padding: 60px 165px;
  background-color: var(--main-white-color);
  border-radius: 16px;
`;

export const MainButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  font-family: inherit;
  width: 100%;
  height: 46px;
  padding: 0;
`;