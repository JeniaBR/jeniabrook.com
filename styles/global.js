import { css } from '@emotion/react';

import { typography } from './theme';

import { fontFacesCss } from './fontFaces';

const browserBaseFontSize = 16;

export const globalCss = css`
  ${fontFacesCss}

  /**
   * Box model like it should be:
   * http://www.paulirish.com/2012/box-sizing-border-box-ftw/
   */
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /**
   * Reset
   */
  html,
  body {
    margin: 0;
    padding: 0;
    font-weight: 300;
    letter-spacing: 0.2px;
  }

  a {
    text-decoration: none;
    color: hotpink;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: none;
  }

  /**
   * Font sizing strategy making 1rem equal 10px for easy usage
   * e.g. 1.6rem = 16px
   */
  :root {
    --color-black: #2c2c2c;
    --color-white: #ffffff;
    --color-red: #fc4d53;
    --color-light-red: #fa696e;
    --color-yellow: #fed237;
    --color-light-yellow: #fee788;
    --color-purple: #5c5cf1;
    --color-light-purple: #8f92fe;
    --color-light-gray: #fafafa;

    /* e.g. (10 / 16) * 100 = 62.5% */
    font-size: ${(typography.rootFontSize / browserBaseFontSize) * 100}%;
  }

  /**
   * Default font settings for all generic text
   */
  body {
    font-family: ${typography.fontPrimary};
    font-size: 1.6rem;
    font-weight: 300;
    /* Prevent scroll-bar from showing when positioning elements outside (to the page's right) */
    overflow-x: hidden;
    color: var(--color-black);
  }

  /**
   * Fix default input font styles not taken from body styles
   */
  input {
    font-size: inherit;
    font-weight: inherit;
  }
`;
