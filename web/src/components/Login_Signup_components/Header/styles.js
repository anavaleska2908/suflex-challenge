import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin-bottom: 1em;
  align-items: center;
  background-color: var(--color-primary);
  height: 4.5em;
  box-shadow: var(--box-shadow);
  width: 100vw;

  h1 {
    color: var(--grey-3);
    font-size: 1.2em;
    margin-right: 0.5em;
    margin-bottom: 0.4em;
    margin-left: 0.5em;
    margin-top: 0.2em;
    span {
      color: var(--details);
      font-weight: bold;
    }
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  button {
    margin: 0;
    padding: 0;
    background-color: var(--white-1);
    color: var(--color-primary);
  }
  
  p {
    color: var(--white-1)
    
  }
`;