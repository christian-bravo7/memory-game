import styled from 'styled-components';

const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.rem(20)};
`;

export default Title;