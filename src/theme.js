import { css } from 'styled-components';

const theme = {
  rem: (px) => `${px / 16}rem`,
  shadow: (color = '#00000080') => `
    ${theme.rem(4)} ${theme.rem(4)} ${theme.rem(22)} ${theme.rem(-14)} ${color}`,
  'inset-0': css`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `
};

export default theme;