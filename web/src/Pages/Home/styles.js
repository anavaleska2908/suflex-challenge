import styled from 'styled-components';

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   
   div {
    margin-bottom: 1em;
      input {
          margin-left: 0;
      }
      button {
          margin-right: 0;
      }
   }
   
   @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 1.5em;
    }
`

export const LiStyled = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;    
    
    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        display: flex;
        display: flex;
        flex-wrap: wrap;
        margin-left: 2em;
    }
`;

export const MainStyled = styled.main`

`;