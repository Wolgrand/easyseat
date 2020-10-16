import React from 'react';

import {FiPower} from 'react-icons/fi'

import { Container, Header, Filter, Title, Main, Footer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header >
        <p>EasySeat</p>
        <FiPower />
      </Header>
      <Title>
        Eventos
      </Title>
      <Filter>
        <button>Todos</button>
        <button>Próximos</button>
        <button>Passados</button>
      </Filter>
      <Main>
        <div></div>
      </Main>
      <Footer>
        Footer
      </Footer>
    </Container>
  );
}

export default Home;