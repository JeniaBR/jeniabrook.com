import { css } from '@emotion/react';
import { colors } from '../styles/theme';

const tileCss = ({ primaryColor, secondaryColor, degree }) => css`
  height: 150px;
  width: 150px;
  background: ${secondaryColor &&
  `linear-gradient(${degree}deg, ${colors[primaryColor]} 50%, ${colors[secondaryColor]} 0 100%);`};
  background-color: ${colors[primaryColor]};
`;

function Tile({ children, primaryColor, secondaryColor, degree = 0 }) {
  return (
    <div css={tileCss({ primaryColor, secondaryColor, degree })}>
      {children}
    </div>
  );
}

export default Tile;
