import React from 'react';

import { Container, Info, Header, Detail, Chart } from './styles';

import { FaClock, FaUserFriends } from 'react-icons/fa';
import ProgressChart from '../ProgressChart';

interface Props {
  color: string;
  progress: number;
  label: string;
}

const EventCard: React.FC<Props> = ({ color, progress, label }) => {
  return (
    <Container style={{ background: `${color}` }}>
      <Info>
        <Header>
          <strong>Celebração Eucarística</strong>
          <p>Quinta, 07 de Outubro de 2020</p>
        </Header>
        <Detail>
          <div>
            <FaClock size={20} />
            <p>09:00</p>
          </div>
          <div>
            <FaUserFriends size={20} />
            <p>50 pessoas</p>
          </div>
        </Detail>
      </Info>
      <Chart>
        <ProgressChart
          progress={progress}
          size={55}
          strokeWidth={7}
          circleOneStroke="rgba(255, 255, 255, 0.3)"
          circleTwoStroke="#fff"
          label={label}
        />
      </Chart>
    </Container>
  );
};

export default EventCard;
