import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const TopBar = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-in-primary);
  padding: 1.6rem 0;

  a {
    height: 3.2rem;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.6;
  }

  > img {
    height: 1.6rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;
  }
`;

export const HeaderContent = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 1rem auto;

  strong {
    font: 700 3.6rem Archivo;
    line-height: 3.5rem;
    color: var(--color-title-in-primary);
  }

  p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    max-width: 1100px;

    strong {
      max-width: 350px;
    }
  }
`;
