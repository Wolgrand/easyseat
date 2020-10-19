import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Header } from './styles';
import loginImage from '../../assets/images/loginImage.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/home');
  }, [history]);

  return (
    <Container>
      <Header>
        <h1>EasySeat</h1>
        <p>Sua plataforma de reservas</p>
      </Header>
      <img src={loginImage} alt="logo" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/home">Esqueci minha senha</Link>
      <Link to="/home">
        <FiLogIn />
        Criar conta
      </Link>
    </Container>
  );
};

export default Login;
