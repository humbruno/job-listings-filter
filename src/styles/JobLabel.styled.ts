import styled from 'styled-components';

const Label = styled.button`
  border: none;
  font-size: 0.8125rem;
  font-weight: 700;

  padding: 6px 8px;
  border-radius: 4px;

  color: var(--clr-primary);
  background-color: var(--btn-filter);

  transition: all 150ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: var(--clr-primary);
  }
`;

export default Label;
