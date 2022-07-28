import { Button } from "../Button";
import { Container } from './styles';
import { BsSearch } from 'react-icons/bs';
import {useDashboardPage} from "../../providers/DashboardPage";

export const SearchBar = () => {
    const { handleSearch, inputSearch, setInputSearch} = useDashboardPage();
    
    return (
        <Container>
            <input
                placeholder='Pesquisar'
                value={inputSearch}
                onChange={(event) => {
                setInputSearch(event.target.value);
                handleSearch(event.target.value);
                }}
            />
            <Button
                onClick={ () => handleSearch( inputSearch ) }
            >
                <BsSearch size={12} />
            </Button>
        </Container>
    )
}