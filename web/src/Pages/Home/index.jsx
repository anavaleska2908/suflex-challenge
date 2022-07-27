import { Header } from "../../components/Home_components/Header";
import { Menu } from "../../components/Home_components/Menu";
import { SectionStyled } from "./styles";
import { useHomePage } from "../../providers/HomePage";
import { Modal } from "../../components/Home_components/Modal";
import { Card } from "../../components/Home_components/Card";

export const Home = () => {
    const {switchModal, filteredCharacters, charactersInfo } = useHomePage();
    return (
        <>
            {switchModal && <Modal />}
            <Header />
            <Menu />
            <main>
                <SectionStyled>
                {filteredCharacters.map((character) => <Card character={character} key={character.id}/>)}
                </SectionStyled>
            </main>
        </>
    )
}