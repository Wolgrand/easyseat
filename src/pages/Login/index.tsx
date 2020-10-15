import React from 'react';

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
        <button type="submit">Entrar</button>
      </LoginForm>
      <Footer>
        <p>Esqueci a senha</p>
        <p>Criar conta</p>
      </Footer>
    </Container>
  );
}

export default Login;
