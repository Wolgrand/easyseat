import React, { useState, FormEvent } from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import EventItem from '../../components/EventItem';
import { FaPray } from 'react-icons/fa';

const Eventos: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent): Promise<void> {
    e.preventDefault();
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os eventos disponíveis."></PageHeader>

      <main>
        <EventItem />
      </main>
    </div>
  );
};

export default Eventos;
