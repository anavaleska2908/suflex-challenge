import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  button {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    border: none;
    background: var(--details);
    color: var(--white-1);
    outline: none;
    margin-top: 1em;
    margin-right: 3em;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;

    :hover {
      background-color: var(--details-50);
      color: var(--details);
    }
  }
  input {
    width: 100%;
    max-width: 200px;
    height: 2em;
    border: 0;
    outline: 0;
    border-radius: 5px;
    padding: 8px 8px 8px 8px;
    margin-left: 1em;
    box-sizing: border-box;
    border: 1px solid var(--color-primary);
    cursor: text;

    &::placeholder {
      color: var(--grey-1);
      font-size: 0.7em;
    }

    :focus {
      border: 1px solid var(--color-primary-50);
    }
  }
`;
