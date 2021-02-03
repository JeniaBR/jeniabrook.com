import { css } from '@emotion/react';
import { colors } from '../styles/theme';

const aboutMeCss = css`
  background-color: ${colors.lightGray};
`;

function AboutMe() {
  return <section css={aboutMeCss}>About me.</section>;
}

export default AboutMe;
