import styled from 'styled-components';

const Text = styled.p`
  margin-top: ${({ marginT = 0, theme }) => theme.rem(marginT)};
  margin-right: ${({ marginR = 0, theme }) => theme.rem(marginR)};
  margin-bottom: ${({ marginB = 0, theme }) => theme.rem(marginB)};
  margin-left: ${({ marginL = 0, theme }) => theme.rem(marginL)};
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  font-size: ${({ size = 14, theme }) => theme.rem(size)};
`;

export default Text;