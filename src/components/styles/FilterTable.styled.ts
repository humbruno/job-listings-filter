import styled from 'styled-components';

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  border-radius: 5px;
  padding: 20px 40px;

  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);

  position: absolute;
  margin: 0 128px;
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-50%);

  ul {
    list-style: none;
    display: flex;
    column-gap: 16px;
  }

  .clear {
    border: none;
    background-color: transparent;
    color: var(--clr-tertiary);
    font-weight: 700;
    font-size: 0.8125rem;

    transition: all 150ms ease-in-out;

    &:hover {
      cursor: pointer;
      color: var(--clr-primary);
      border-bottom: 1px solid var(--clr-primary);
    }
  }
`;

export default Filter;
