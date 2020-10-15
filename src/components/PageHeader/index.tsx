import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import { PageHeaderProps } from './types';

import { Container, TopBar, HeaderContent } from './styles';

const PageHeader: React.FC<PageHeaderProps> = ({ title, ...rest }) => (
  <Container>
    <header>
      <TopBar>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBar>

      <HeaderContent>
        <strong>{title}</strong>
        {rest.children}
        {rest.description && <p>{rest.description}</p>}
      </HeaderContent>
    </header>
  </Container>
);

export default PageHeader;
