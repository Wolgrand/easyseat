import React from 'react';
import { Users } from 'styled-icons/fa-solid'

import { Container, Event, EventPreview, EventInfo, ProgressContainer, EventPreviewData, EventPreviewInfo } from './styles';


const Card: React.FC = () => {
  return (
    <Container>
      <Event>
        <EventPreview>
          <EventPreviewData>
            <h2 >22/09/20</h2>
            <h2>09h</h2>
            <p>Celebração Eucarística</p>
          </EventPreviewData>

          <EventPreviewInfo>
            <Users size={20} />
            <p>20 vagas</p>
          </EventPreviewInfo>


        </EventPreview>
        <EventInfo>
          <ProgressContainer>
            <div className="progress"></div>
            <span className="progress-text">
              6/9 Challenges
          </span>
          </ProgressContainer>
          <h6>Celebração Eucarística</h6>
          <h2>Callbacks & Closures</h2>
          <button className="btn">Continue</button>
        </EventInfo>
      </Event>
    </Container>
    /* <Container>
      <Event>
        <EventPreview>

          <h2>22/09/20</h2>
          <h6>09h</h6>
          <a href="/">Celebração Eucarística <i className="fas fa-chevron-right"></i></a>
        </EventPreview>
        <EventInfo>
          <ProgressContainer>
            <div className="progress"></div>
            <span className="progress-text">
              6/9 Challenges
          </span>
          </ProgressContainer>
          <h6>Chapter 4</h6>
          <h2>Callbacks & Closures</h2>
          <button className="btn">Continue</button>
        </EventInfo>
      </Event>
    </Container> */
  );
}

export default Card;