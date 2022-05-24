import styled from 'styled-components';

const LabelFilter = styled.li`
  display: flex;

  div {
    display: flex;
    align-items: center;

    padding: 6px 8px;
    font-size: 0.8125rem;
    font-weight: 700;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    color: var(--clr-primary);
    background-color: var(--btn-filter);
  }

  button {
    display: flex;
    align-items: center;

    border: none;
    background-color: var(--clr-primary);
    padding: 6px 8px;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    transition: all 150ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: var(--clr-secondary);
    }
  }
`;

export default LabelFilter;
