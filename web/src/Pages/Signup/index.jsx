import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Button';
import { Input } from "../../components/Input";
import { Header } from "../../components/Login_Signup_components/Header";
import { Link } from 'react-router-dom';
import { Container, Content } from "./styles";
import { useSignupPage } from '../../providers/SignupPage';

export const Signup = () => {
    const { handleFormSubmit } = useSignupPage();
    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório!'),
        email: yup.string().email('Email inválido').required('Campo obrigatório!'),
        password: yup.string().min(8, 'Mínimo de 8 dígitos ').required('Campo obrigatório!'),
        passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório!'),
    });
    
    const { register, handleSubmit, formState: { errors } } = useForm( {
        resolver: yupResolver(schema)
    });
    return (
        <Container>
          <Header />
            <Content>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <h1>Cadastro</h1>
                    <Input
                        register={register}
                        icon={ FiUser }
                        label='nome'
                        placeholder='Seu nome completo'
                        name='name'
                        error={errors.name?.message}
                    />
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
                      placeholder='Uma senha bem segura' 
                      type='password' 
                      name='password'
                      error={errors.password?.message}            
                    />
                    <Input
                      register={ register } 
                      icon={ FiLock } 
                      label='Confirmação da senha' 
                      placeholder='Confirmação da senha'
                      type='password' 
                      name='passwordConfirm'
                      error={errors.passwordConfirm?.message}
                    />
                    <Button type='submit'>Enviar</Button>
                    <p>
                      Já tem uma conta? Faça seu <Link to='/login'>login</Link>.
                    </p>
                </form>
            </Content>
        </Container>
    )
}