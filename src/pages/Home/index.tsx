import React from 'react';

import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  LogoContainer,
  ButtonContainer,
  TotalConnections,
  TitleContainer,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <h2 className="logo">Sua plataforma de reserva de eventos.</h2>
        </TitleContainer>
        <LogoContainer>
          <img src={landingImg} alt="Proffy" className="logo" />
        </LogoContainer>

        <ButtonContainer>
          <Link to="/login" className="study">
            Login
          </Link>

          <Link to="/eventos" className="give-classes">
            Eventos
          </Link>
        </ButtonContainer>

        <TotalConnections>
          Total de 30 conexões já realizadas
          <img src={purpleHeartIcon} alt="" />
        </TotalConnections>
      </Content>
    </Container>
  );
};

export default Home;
