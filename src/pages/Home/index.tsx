import React from 'react';

import { FiPower } from 'react-icons/fi';

import EventCard from '../../components/EventCard';
import { Container, Header, Filter, Title, Main, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <p>EasySeat</p>
        <FiPower />
      </Header>
      <Title>Eventos</Title>
      <Filter>
        <button>Todos</button>
        <button>Próximos</button>
        <button>Passados</button>
      </Filter>
      <Main>

        <EventCard color="#2ecc71" progress={50} label="25" />
        <EventCard color="#F1C40F" progress={80} label="5" />
        <EventCard color="#E74C3C" progress={100} label="0" />
        <EventCard color="#F1C40F" progress={80} label="5" />
        <EventCard color="#E74C3C" progress={100} label="0" />
        <EventCard color="#8B96A8" progress={100} label="0" />
        <EventCard color="#8B96A8" progress={100} label="0" />
        <EventCard color="#8B96A8" progress={100} label="0" />


      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default Home;
