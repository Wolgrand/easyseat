import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;

  a {
 
    padding: 10px;
    width: 100%;
    height: 8rem;
    border-radius: 0.8rem;
    font: bold 0.8rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  a:first-child {
    margin-right: 1.6rem;
  }

   a img {
    width: 3.5rem;
  }

  .study {
    background: var(--color-primary-lighter);
  }

  .give-classes {
    background: var(--color-secundary);
  }

  .study:hover {
    background: var(--color-primary-light);
  }

  .give-classes:hover {
    background: var(--color-secundary-dark);
  }

  a img {
    margin-right: 2.4rem;
  }
  
  @media (min-width: 1100px) {
    grid-area: buttons;
      justify-content: flex-start;
    }

    a {
      font-size: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
    height: 0.5 rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;

export const TitleContainer = styled.div`
  grid-area: logo;
  text-align: center;
  margin: 2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    align-self: center;
    text-align: left;
    margin: 2rem;

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const LogoContainer = styled.div`
  grid-area: hero;
  text-align: center;
  margin: 2rem;

  img {
    width: 100%;
    padding: 2rem;
  }

  @media (min-width: 1100px) {
    align-self: center;
    text-align: left;
    margin: 2rem;

    img {
      grid-area: hero;
      height: 100%;
    }
  }
`;

export const Content = styled.div`
  .hero-image {
    padding: 2rem;
    margin: 0 auto;
    width: 20rem;
  }

  @media (min-width: 1100px) {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 'logo hero hero' 'buttons buttons total';

    .hero-image {
      grid-area: hero;
      justify-self: end;
    }
  }
`;
