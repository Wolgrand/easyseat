import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import EventCard from '../../components/EventCard';
import { Container, Content, Header, Filter, Title} from './styles';

const Teste: React.FC = () => {
  return (
    <Container>
      <header>
      <Header>
        <p>EasySeat</p>
        <Link to="/login"><FiPower /></Link>
      </Header>
      <Title>Eventos</Title>
      <Filter>
        <button>Todos</button>
        <button>Próximos</button>
        <button>Passados</button>
      </Filter>
  </header>

  <Content>
  <div id="chat-container">
        <div id="chat">
        <EventCard color="#2ecc71" progress={50} label="25" />
        <EventCard color="#F1C40F" progress={80} label="5" />
        <EventCard color="#E74C3C" progress={100} label="0" />
        <EventCard color="#F1C40F" progress={80} label="5" />
        <EventCard color="#E74C3C" progress={100} label="0" />
        <EventCard color="#8B96A8" progress={100} label="0" />
        <EventCard color="#8B96A8" progress={100} label="0" />
        <EventCard color="#8B96A8" progress={100} label="0" />
        </div>
        <input type="text" placeholder="Chat here" />
  </div>
  </Content>



      
    </Container>
  );
};

export default Teste;
