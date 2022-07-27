import { Input } from "../Input";
import { Button } from "../Button";
import { Container } from './styles';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
    return (
        <Container>
            <input
                placeholder='Pesquisar'
                value={inputSearch}
                onChange={(event) => {
                //setInputSearch(event.target.value);
                //handleClick(event.target.value);
                }}
            />
            <Button
                //onClick={ () => handleClick( inputSearch ) }
            >
                <BsSearch size={12} />
            </Button>
        </Container>
    )
}