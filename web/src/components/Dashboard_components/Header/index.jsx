import { Container, Content } from "./styles";
import { Button } from "../../Button";
import { MdOutlineFaceRetouchingOff } from "react-icons/md";
import { useHistory } from "react-router-dom";

export const Header = () => {    
    const history = useHistory();
    const handleClick = () => {    
        localStorage.clear();
        return history.push( "/" );      
    }
    return (
        <Container>
            <h1>Ricky<span>&amp;</span>Morty</h1>
            <Content onClick={handleClick}>                
                <Button><MdOutlineFaceRetouchingOff size={ 30 } /></Button>
            </Content>
        </Container>
    )
}