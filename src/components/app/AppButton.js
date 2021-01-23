const { default: styled } = require('styled-components');

const AppButton = styled.button`
  padding: ${({ theme }) => `${theme.rem(10)} ${theme.rem(20)}`};
  color: white;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: ${({ theme }) => theme.rem(12)};
  box-shadow: ${({ theme }) => theme.shadow()};
  cursor: pointer;
`;

export default AppButton;