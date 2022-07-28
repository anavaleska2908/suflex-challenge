import { Header } from "../../components/Home_components/Header";
import { Menu } from "../../components/Home_components/Menu";
import { Content, LiStyled } from "./styles";
import { useHomePage } from "../../providers/HomePage";
import { Modal } from "../../components/Home_components/Modal";
import { Card } from "../../components/Home_components/Card";
import { SearchBar } from "../../components/SearchBar";

export const Home = () => {
    const {switchModal, filteredCharacters } = useHomePage();
    return (
        <>
            {switchModal && <Modal />}
            <Header />
            <Content>
                <SearchBar  />
                <Menu />
            </Content>
            <main>
                <LiStyled>
                {filteredCharacters.map((character) => <Card character={character} key={character.id}/>)}
                </LiStyled>
            </main>
        </>
    )
}