import { css } from '@emotion/react';
import { colors } from '../styles/theme';
import Tile from './Tile';

const tilesCss = css`
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-template-rows: repeat(5, min-content);
`;

const tiles = [
  { primaryColor: 'lightRed' },
  { primaryColor: 'purple', secondaryColor: 'lightPurple', degree: -45 },
  { primaryColor: 'lightGray' },
  { primaryColor: 'yellow' },
  { primaryColor: 'purple' },
  { primaryColor: 'lightYellow' },
  { primaryColor: 'red' },
  { primaryColor: 'purple', secondaryColor: 'lightPurple', degree: 45 },
  { primaryColor: 'yellow', secondaryColor: 'lightYellow', degree: 45 },
  { primaryColor: 'purple' },
  { primaryColor: 'yellow' },
  { primaryColor: 'lightGray' },
  { primaryColor: 'red' },
  { primaryColor: 'lightGray' },
  { primaryColor: 'red', secondaryColor: 'lightRed', degree: 225 },
  { primaryColor: 'purple' },
  { primaryColor: 'purple', secondaryColor: 'lightPurple', degree: 45 },
  { primaryColor: 'red' },
  { primaryColor: 'yellow' },
  { primaryColor: 'red' },
];

function Tiles() {
  return (
    <div css={tilesCss}>
      {tiles.map((tile, index) => (
        <Tile key={index} {...tile} />
      ))}
    </div>
  );
}

export default Tiles;
