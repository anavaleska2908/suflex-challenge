import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    border-radius: 8px;
    margin-bottom: 1em;
    box-sizing: border-box;
    border: 1px solid var(--grey-0);
    width: 11.5em;
    
    img {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        max-width: 100%;   
    }
    
    div {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 10rem;
        align-items: flex-start;
    }
    
    h3 {
        color: var(--grey-0);
        padding-left: 0;
        margin-top: 0.4em;
        margin-bottom: 0.4em;
        align-self: center;
    }
    
    @media (min-width: 500px) {
        justify-content: space-between;
        width: 14.5em;
        align-items: center;
        margin-left: 0.5em;
        margin-right: 0.5em;
        
        img {
            max-width: 120%;
        }
        
        div {
            box-sizing: border-box;
            display: flex;
            width: 12em;
            align-items: center;
        }
        
        h3 {
            color:var(--grey-0);
            padding-left: 0;
            margin-top: 0.2em;
            margin-bottom: 0.6em;
            text-align: center;
            font-size: 0.8em;
        }
    }
`;