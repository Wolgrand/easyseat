import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  padding: 1.5rem;

  color: var(--color-text-in-primary);
  background: #fdfdfd;
`;

export const Header = styled.div`
  background: #fdfdfd;
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  color: #3e3b47;

  p {
    margin: 0 auto;
  }

  svg {
  }
`;
export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #f5f7fa;
  border-radius: 1rem;
  margin-top: 1rem;

  button {
    background: transparent;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    padding: 0 1.5rem;
    border-radius: 1rem;
    line-height: 4rem;
    border: none;

    color: #8b96a8;
  }

  button:hover {
    background: #6c63ff;
    color: #f5f7fa;
  }

  button::select {
    border: none;
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  color: #3e3b47;
  font-size: 4rem;
`;
export const Main = styled.main`
  padding-top: 10rem;
  position: relative;
  display: flex;
  overflow: auto;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
export const Footer = styled.footer`
  background: #f5f7fa;
  display: flex;
  justify-content: center;
`;
