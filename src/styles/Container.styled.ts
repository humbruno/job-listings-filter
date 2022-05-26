import styled from 'styled-components';

const Container = styled.main`
  background-color: var(--bg-primary);

  margin-top: 156px;
  min-height: 100vh;

  padding: 76px 128px;

  position: relative;

  @media (max-width: 1023px) {
    padding: 76px 24px;
  }
`;

export default Container;
