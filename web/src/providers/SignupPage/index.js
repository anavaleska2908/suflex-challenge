import { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const SignupPageContext = createContext( [] );

export const SignupPageProvider = ( { children } ) => {
    const [ authenticated, setAuthenticated ] = useState( false );
    //const [ user, setUser ] = useState( JSON.parse( localStorage.getItem( "@Suflex:user")));
    const history = useHistory();

    const handleFormSubmit = ({ name, email, password }) => {
        const user = { name, email, password };
        api.post("/users", user).then((_) => {
            toast.success("Sua conta foi criada com sucesso!")
            return history.push("/login")
        }).catch(error => toast.error("Erro ao criar a conta, tente outro email!"))
    }
    if (authenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <SignupPageContext.Provider value={ {
            handleFormSubmit,
        } }>
            { children }
        </SignupPageContext.Provider>
    );
};

export const useSignupPage = () => useContext( SignupPageContext );