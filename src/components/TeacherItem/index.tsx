import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/24507574?s=460&u=48fe432ca70e231411914887f71e42a2befefa16&v=4"
          alt="avatar"
        />
        <div>
          <strong>wolgrand</strong>
          <span>Biologia</span>
        </div>
      </header>

      <p>Biografia</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <a onClick={(e) => e} href={`https://wa.me/+5565992539999`}>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
