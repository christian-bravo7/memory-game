import styled from 'styled-components';

const Card = styled.div`
  padding: ${({ theme }) => theme.rem(20)};
  background-color: white;
  border-radius: ${({ theme }) => theme.rem(20)};
  box-shadow: ${({ theme }) => theme.shadow()};
`;

export default Card;