import { css } from '@emotion/react';
import { colors } from '../styles/theme';
import Tiles from './Tiles';

const aboutMeCss = css`
  background-color: ${colors.lightGray};
`;

function AboutMe() {
  return (
    <section css={aboutMeCss}>
      <Tiles />
    </section>
  );
}

export default AboutMe;
