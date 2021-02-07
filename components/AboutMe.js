import { css } from '@emotion/react';
import { colors } from '../styles/theme';
import Text from './Text';
import Tiles from './Tiles';

const aboutMeCss = css`
  background-color: ${colors.lightGray};
  display: grid;
  grid-template-columns: min-content auto;
`;

const contentCss = css`
  display: grid;
  grid-template-columns: 120px auto min-content auto 120px;
  grid-template-rows: 120px min-content min-content auto 120px;
`;

const headingLabelCss = css`
  grid-column: 3/4;
  grid-row: 2/3;
`;

const headingCss = css`
  grid-column: 3/4;
  grid-row: 3/4;
`;

function AboutMe() {
  return (
    <section css={aboutMeCss}>
      <Tiles />
      <div css={contentCss}>
        <Text
          css={headingLabelCss}
          component="div"
          fontSize={1.8}
          fontWeight={500}
          serifFont
        >
          Im An Open Book
        </Text>
        <Text css={headingCss} component="div" fontSize={8.5} fontWeight={800}>
          About Me.
        </Text>
      </div>
    </section>
  );
}

export default AboutMe;
