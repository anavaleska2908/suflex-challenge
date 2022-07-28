import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";
import { api } from "../../services/api";

const DashboardPageContext = createContext([]);

export const DashboardPageProvider = ( { children } ) => {
    const [ authenticated, setAuthenticated ] = useState( false );
    const [ switchModal, setSwitchModal ] = useState( false );
    const [ charactersInfo, setCharactersInfo ] = useState([]);
    const [ filteredCharacters, setFilteredCharacters ] = useState( [ ...charactersInfo ] );
    const [ idCard, setIdCard ] = useState( 1 );
    const [ favoriteCharacters, setFavoriteCharacters ] = useState( [] );
    const [filter, setFilter] = useState("Todos")    
    const [ characterModal, setCharacterModal ] = useState( [] );
    const token = localStorage.getItem( "@Suflex:token" );
    const [ inputSearch, setInputSearch ] = useState( "" );
    const [ user, _ ] = useState( JSON.parse( localStorage.getItem( "@Suflex:user")));
    
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((response) => {             
                setCharactersInfo(response.results);
                setFilteredCharacters( response.results );   
            }).catch((error) => console.log(error));
    }, []);
    
    const loadFavorites = async () => {
        const response = await api.get(`/favoritesCharacters/${user.id}`, {
            headers: {
                 Authorization: `Bearer ${token}`,
            },
        })
         !!response && setFavoriteCharacters(response.data)
         if(!!response && filter === "Favorites") setFilteredCharacters(response.data)        
     }
     useEffect(() => {
        !!user && loadFavorites()
     }, [])
     const handleFilter = () => {
         if (filter !== "Favorites") {                
             setFilteredCharacters(
                 filter === "Todes" ? charactersInfo : charactersInfo.filter(({ species }) => species.toLowerCase().includes(filter.toLowerCase()))
             )
         } else {
             setFilteredCharacters(favoriteCharacters)                
         }
     }
     useEffect(() => {
         handleFilter()
     }, [filter])
    
    const saveFavoriteCharacter = async ({id,name,status,species,type,gender,origin,location,image,episode,url,created}) => {
        const {id: user_id} = user;
        if (!!favoriteCharacters.find((value) => id === value.character)) {
            const response = await api.delete(`/favoritesCharacters/${id}?owner=${user_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }, 
            })
            if (!!response) {
                toast.warning("Removido com sucesso!");
                const filtered = filter;
                console.log("filtered ", filtered);
                loadFavorites();
            }
                
        } else {
            const body = {name,status,species,type,gender,origin,location,image,episode,url,created, user: user_id, character: id}
            const response = await api.post("/favoritesCharacters", JSON.stringify(body), {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                
            })             
            !!response && loadFavorites();
            !!response && toast.success("Adicionado com sucesso!");
        }     
    }
    
    const handleModal = () => {       
        setSwitchModal( true )   
    }
    
    const showCharacters = (inputValue) => {
        setFilteredCharacters(
          inputValue === ""
            ? charactersInfo
            : charactersInfo.filter(({ name }) => {
              return (
                name.toLowerCase().includes(inputValue.toLowerCase())
              )
            })
        )
        return filteredCharacters;
      }
      
      const handleSearch = (input) => {
        if (input === " ") {
          return charactersInfo
        } else {
          showCharacters(input)
        }
    }
    
    const changeCharacter = () => {
        setCharacterModal(charactersInfo.filter( ( { id } ) => {
            return (
                id===idCard
            )
        }));
    }

    return (
        <DashboardPageContext.Provider value={ {
            switchModal,
            setSwitchModal,
            characterModal,
            setFilter,
            saveFavoriteCharacter,
            handleModal,
            favoriteCharacters,
            changeCharacter,
            setIdCard,
            filteredCharacters,
            handleSearch,
            inputSearch,
            setInputSearch,
        } }>
            { children }
        </DashboardPageContext.Provider>
    );
};

export const useDashboardPage = () => useContext( DashboardPageContext );