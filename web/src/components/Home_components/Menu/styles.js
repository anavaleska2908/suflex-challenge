import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-right: 0;
  justify-content: center;
  margin-bottom: 1em;

  button {
    :hover {
      color: var(--color-primary);
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    margin-right: 1em;
  }
`;