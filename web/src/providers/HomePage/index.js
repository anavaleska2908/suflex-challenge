import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const HomePageContext = createContext( [] );

export const HomePageProvider = ( { children } ) => {
    const [ authenticated, setAuthenticated ] = useState( false );
    const [ switchModal, setSwitchModal ] = useState( false );
    const [ charactersInfo, setCharactersInfo ] = useState([]);
    const [ filteredCharacters, setFilteredCharacters ] = useState( [ ...charactersInfo ] );
    const [ idCard, setIdCard ] = useState( 1 );
 console.log("idCard ", idCard);
    const [ favoriteCharacters, setFavoriteCharacters ] = useState( [] );
    const [characterModal, setCharacterModal] = useState([])
 console.log("characterModal ", characterModal);
    
    const history = useHistory();

    
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((response) => {
                setCharactersInfo(response.results);
                setFilteredCharacters( response.results );
            }).catch((error) => console.log(error));
    }, []);
 
    
    
    useEffect(() => {
        const token = localStorage.getItem("@Suflex:token") || "";        
        if ( !!token ) {
            setAuthenticated(true);
            history.push("/dashboard");
        } else {
            setAuthenticated(false);
            history.push("/");
        }
    }, [ authenticated ] )
    
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
            filteredCharacters,
            handleModal,
            setIdCard,
            charactersInfo,
            changeCharacter,
            handleFilter
        } }>
            { children }
        </HomePageContext.Provider>
    );
};

export const useHomePage = () => useContext( HomePageContext );