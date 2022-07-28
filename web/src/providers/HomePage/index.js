import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const HomePageContext = createContext( [] );

export const HomePageProvider = ( { children } ) => {
    const [ switchModal, setSwitchModal ] = useState( false );
    const [ charactersInfo, setCharactersInfo ] = useState([]);
    const [ filteredCharacters, setFilteredCharacters ] = useState( [ ...charactersInfo ] );
    const [ idCard, setIdCard ] = useState( 1 );
    const [characterModal, setCharacterModal] = useState([])
    
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((response) => {
                setCharactersInfo(response.results);
                setFilteredCharacters( response.results );
            }).catch((error) => console.log(error));
    }, []);
    
    const handleFilter = (filter) => {
        setFilteredCharacters(
            filter === "Todes" ? charactersInfo : charactersInfo.filter(({ species }) => species.toLowerCase().includes(filter.toLowerCase()))
        )
    }
    
    const handleModal = () => {       
        setSwitchModal( true )   
    }
    
    const changeCharacter = () => {
        setCharacterModal(charactersInfo.filter( ( { id } ) => {
            return (
                id===idCard
            )
        }));
    }

    return (
        <HomePageContext.Provider value={ {
            switchModal,
            setSwitchModal,
            characterModal,
            handleFilter,
            setIdCard,
            handleModal,
            changeCharacter,            
            filteredCharacters,
        } }>
            { children }
        </HomePageContext.Provider>
    );
};

export const useHomePage = () => useContext( HomePageContext );