import { css } from '@emotion/react';

const tileCss = ({ primaryColor, secondaryColor, deg }) => css`
  height: 150px;
  width: 150px;
  background: ${primaryColor &&
  secondaryColor &&
  `linear-gradient(${deg}deg, ${primaryColor}, ${secondaryColor});`};
  background-color: ${primaryColor};
`;

function Tile({ children, primaryColor, secondaryColor, deg = 0 }) {
  return (
    <div css={tileCss({ primaryColor, secondaryColor, deg })}>{children}</div>
  );
}

export default Tile;
