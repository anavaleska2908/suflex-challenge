import { Header } from "../../components/Dashboard_components/Header";
import { Menu } from "../../components/Dashboard_components/Menu";
import { SearchBar } from "../../components/SearchBar";
import { Container, Content, SectionStyled } from "./styles";
import { useDashboardPage } from "../../providers/DashboardPage";
import { Modal } from "../../components/Dashboard_components/Modal";
import { Card } from "../../components/Dashboard_components/Card";

export const Dashboard = () => {
    const {switchModal, filteredCharacters} = useDashboardPage();
    
   
    return (
        <>
            {switchModal && <Modal />}
            <Container>
                <Header />
                <Content>
                    <Menu />
                    <SearchBar />
                </Content>
                <main>
                    <SectionStyled>
                        {filteredCharacters.map((character) => <Card character={character} key={character.id+"Favorites"}/>)}
                    </SectionStyled>
                </main>
           </Container>
        </>
    )
}