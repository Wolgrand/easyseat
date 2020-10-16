import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'

import { Container, Header, LoginForm, Footer } from './styles';
import loginImage from '../../assets/images/loginImage.svg'

const Login: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>EasySeat</h1>
        <p>Sua plataforma de reservas</p>
      </Header>
        <img src={loginImage} alt="logo"/>
      <LoginForm>
        <input type="email" name="email" id="email" placeholder="email"/>
        <input type="password" name="password" id="password" placeholder="senha"/>
        <Link to="/home">Entrar</Link>
      </LoginForm>
      <Footer>
        <p>Esqueci a senha</p>
        <p>Criar conta <FiArrowRight/></p>
      </Footer>
    </Container>
  );
}

export default Login;
