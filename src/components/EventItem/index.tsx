import React from 'react';

import { FaPray } from 'react-icons/fa';

import './styles.css';

export interface event {
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface eventItemProps {
  event: event;
}

const EventItem: React.FC = () => {
  return (
    <article className="event-item">
      <header>
        <FaPray />
        <div>
          <strong>Celebração Eucarística</strong>
          <span>06/10/2020 - 09h</span>
        </div>
      </header>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
      </footer>
    </article>
  );
};

export default EventItem;
