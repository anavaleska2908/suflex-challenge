import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.324);
`;

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: var(--white-1);
    
    button {
        align-self: center;
        margin-top: -0.5em;
    }
    
    div {
            max-width: 95%;
            align-self: center;            
            margin: 0 auto;
            margin-top: 0.5em;
        }
    
    @media (min-width: 425px) {
        width: 50%;
        div {
            max-width: 95%;
            align-self: center;            
            margin: 0 auto;
            margin-top: 0.5em;
        }
    }
    
    @media (min-width: 600px) {
        width: 65%;
        border-radius: 8px;
        
        div {
            max-width: 95%;
            align-self: center;            
            margin: 0 auto;
            margin-top: 0.5em;
        }
    }
`;

export const Shape = styled.div`
    display: flex;
    flex-direction: column;
    
    div {
        display: flex;
        flex-direction: column;
    
        img {
            max-width: 100%;
        }
        
        h3 {
            align-self: center;
            margin-top: 0.2em;
        }
    }
    
    ul {
        width: 80%;
        height: 8em;
        margin-top: 0.5em;
        padding-left: 0.8em;
        
        li {
            list-style: none;
        }
    }
    
    
    
    @media (min-width: 600px) {    
        display: flex;
        max-width: 20em;
        flex-direction: row;     
        
        div {         
            margin-top: 0;
            width: 20em;
            img {
                max-width: 80%;
                border-radius: 8px;
                border: 1px solid var(--color-primary);        
            }
            
            h3 {
                align-self: flex-start;
                margin-top: 0.2em;
                /*font-size: 2em;*/
                color: var(--grey-0)
            }
        }
        
        ul {
            /*width: 80%;*/
            height: 8em;
            padding-left: 0;
            margin-top: -1.8em;
            
            align-self: center;
            li {
                list-style: none;
                margin-bottom: 0.5em;
                color: var(--details)
            }
        }
    }
`;

export const modal = styled.div`
    
`;