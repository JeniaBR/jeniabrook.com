import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { typography } from '../styles/theme';

const textCss = ({ fontSize, fontWeight, color, serifFont }) => css`
  font-size: ${fontSize && `${fontSize}rem`};
  font-weight: ${fontWeight};
  color: ${color};
  font-family: ${serifFont && typography.fontSerif};
`;

function Text({
  children,
  color = 'inherit',
  component: Component = 'p',
  fontSize,
  fontWeight,
  serifFont = false,
  ...restProps
}) {
  return (
    <Component
      css={textCss({ fontSize, fontWeight, color, serifFont })}
      {...restProps}
    >
      {children}
    </Component>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  component: PropTypes.elementType,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.number,
  serifFont: PropTypes.bool,
};

export default Text;