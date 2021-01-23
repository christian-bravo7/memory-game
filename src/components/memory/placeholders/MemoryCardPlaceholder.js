import styled from 'styled-components';

import Card from '../../shared/Card';

const MemoryCardPlaceholder = styled(Card)`
  width: ${({ theme }) => theme.rem(45)};
  height: ${({ theme }) => theme.rem(45)};
  margin: ${({ theme }) => theme.rem(2)};
  border-radius: ${({ theme }) => theme.rem(15)};
`;

export default MemoryCardPlaceholder;