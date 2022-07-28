import { Button } from "../../Button";
import { CardStyled } from "./styles";
import { useDashboardPage } from "../../../providers/DashboardPage";

export const Card = ({character}) => {
    const {saveFavoriteCharacter, setIdCard, handleModal, favoriteCharacters, changeCharacter} = useDashboardPage();
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
            <div>
                <Button onClick={ () => saveFavoriteCharacter( character ) }>
                {!!favoriteCharacters.find((value) => character.id === value.character) ? "Remover" : "Adicionar"}
                </Button>
            </div>
        </CardStyled>
    )
}