import styled from 'styled-components';

const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1023px) {
    gap: 40px;
  }
`;

export default List;
