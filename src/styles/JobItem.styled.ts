import styled from 'styled-components';

const Item = styled.li<{ isFeatured: boolean }>`
  background-color: #fff;

  padding: 32px 40px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);

  border-left: ${(props) =>
    props.isFeatured ? '5px solid var(--clr-primary)' : 'none'};

  .job__info {
    display: flex;
    align-items: center;

    column-gap: 24px;

    .job__tags {
      display: flex;
      font-size: 0.9375rem;
      color: var(--clr-tertiary);

      column-gap: 36px;
      list-style: disc;

      li:nth-child(1) {
        list-style-type: none;
      }
    }

    h2 {
      font-size: 0.875rem;
      color: var(--clr-primary);
    }

    h3 {
      font-size: 1.125rem;
      color: var(--clr-secondary);
      transition: all 150ms ease-in-out;

      &:hover {
        cursor: pointer;
        color: var(--clr-primary);
      }
    }

    &-description {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }

  .job__labels {
    list-style: none;
    display: flex;
    column-gap: 16px;
  }

  .job__title {
    display: flex;
    align-items: center;

    gap: 16px;

    ul {
      list-style: none;
      display: flex;
      gap: 8px;
    }
  }
`;

export default Item;