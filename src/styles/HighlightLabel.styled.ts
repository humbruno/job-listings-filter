import styled from 'styled-components';

const Highlighted = styled.li<{ isNew: boolean }>`
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;

  color: #fff;
  background-color: ${(props) => (props.isNew ? '#5CA5A5' : '#2B3939')};
  padding: 6px 8px;
  border-radius: 12px;
`;

export default Highlighted;
