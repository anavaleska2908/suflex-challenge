import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

const LoginPageContext = createContext( [] );

export const LoginPageProvider = ( { children } ) => {
    const [ authenticated, setAuthenticated ] = useState( false );
    const history = useHistory();
  
    const handleFormSubmit = ( data) => {
        api.post( '/login', data )
          .then( response => {
            const { token, id, name, email, created_at } = response.data;
            const user = { id, name, email, created_at }
            localStorage.setItem('@Suflex:token', token);
            localStorage.setItem('@Suflex:user', JSON.stringify(user));
            setAuthenticated( true );
            return history.push( '/dashboard' );
          })
          .catch(error => toast.error('Email ou senha inválidos'))
      }

    return (
        <LoginPageContext.Provider value={ {
            handleFormSubmit,
        } }>
            { children }
        </LoginPageContext.Provider>
    );
};

export const useLoginPage = () => useContext( LoginPageContext );