import { FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { Header } from "../../components/Login_Signup_components/Header";
import { Link } from 'react-router-dom';
import { Container, Content } from "./styles";
import { useLoginPage } from '../../providers/LoginPage';

export const Login = () => {
    const { handleFormSubmit } = useLoginPage();
    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório!'),
        password: yup.string().min(8, 'Mínimo de 8 dígitos ').required('Campo obrigatório!'),
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm( {
        resolver: yupResolver(schema)
    });
    return (
        <Container>
          <Header />
            <Content>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <h1>Login</h1>
                    <Input 
                      register={register} 
                      icon={ FiMail } 
                      label='email' 
                      placeholder='Seu melhor email' 
                      name='email' 
                      error={errors.email?.message}

                    />
                    <Input 
                      register={register} 
                      icon={ FiLock } 
                      label='senha' 
                      placeholder='Uma senha bem segura' type='password' 
                      name='password'
                      error={errors.password?.message}
            
                    />
                    <Button type='submit'>Enviar</Button>
                    <p>
                      Não tem uma conta? Faça seu <Link to='/signup'>cadastro</Link>.
                    </p>
                </form>
            </Content>
        </Container>
    )
}