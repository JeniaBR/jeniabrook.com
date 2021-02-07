import { css } from '@emotion/react';
import { colors } from '../styles/theme';
import Tile from './Tile';

const aboutMeCss = css`
  background-color: ${colors.lightGray};
`;

function AboutMe() {
  return (
    <section css={aboutMeCss}>
      <Tile
        primaryColor={colors.purple}
        secondaryColor={colors.yellow}
        deg={45}
      />
    </section>
  );
}

export default AboutMe;
