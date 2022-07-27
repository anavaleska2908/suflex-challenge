import { Container, Content } from "./styles";
import { Button } from "../Button";
import { MdOutlineTagFaces } from "react-icons/md";
import { useHistory } from "react-router-dom";

export const Header = () => {
    
    const history = useHistory();
    const handleClick = () => {    
        return history.push( "/login" );      
    }
    return (
        <Container>
            <h1>Ricky<span>&amp;</span>Morty</h1>
            <Content onClick={handleClick}>                
                <Button><MdOutlineTagFaces size={ 30 } /></Button>
                <p>Login</p>
            </Content>
        </Container>
    )
}