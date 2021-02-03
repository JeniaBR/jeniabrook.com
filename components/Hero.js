import { css, keyframes } from '@emotion/react';

import Text from './Text';

const blink = keyframes`
  50% { opacity: 0.0; }
`;

const heroCss = css`
  min-height: 100vh;
  background-color: #f66;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const introductionCss = css`
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
`;

const headingTitleCss = css`
  margin-top: 0;
  text-align: center;

  ::after {
    content: '|';
    animation: ${blink} 1s ease infinite;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
  }

  @media (max-width: 767px) {
    font-size: 4rem;
  }
`;

function Hero() {
  return (
    <section css={heroCss}>
      <Text
        css={introductionCss}
        component="h2"
        fontSize={4}
        serifFont
        fontWeight={500}
      >
        I'm Jenia Brook.
      </Text>
      <Text
        css={headingTitleCss}
        component="h1"
        fontSize={9}
        fontWeight={800}
        color="white"
      >
        Front-end engineer.
      </Text>
    </section>
  );
}

export default Hero;
