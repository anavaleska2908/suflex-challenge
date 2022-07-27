import { Button } from "../../Button";
import { CardStyled } from "./styles";
import { useHomePage } from "../../../providers/HomePage";

export const Card = ({character}) => {
    const {setIdCard, handleModal, changeCharacter} = useHomePage();
    return (
        <CardStyled id={character.id} >
            <div onClick={() => {
                setIdCard( character.id )
                handleModal()
                changeCharacter()
            }}>              
                <img src={character.image} alt="Imagem do personagem" />
            </div>
                
            <div>
                <h3>{character.name}</h3>
            </div>
        </CardStyled>
    )
}