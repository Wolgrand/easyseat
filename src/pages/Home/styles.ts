import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  align-items:center;
  color: var(--color-text-in-primary);
  background: #fdfdfd;

`;

export const Header = styled.header`
  background: #fdfdfd;
  display: flex;
  width: 100%;
  height: 5rem;
  align-content: center;
  text-align: center;
  padding: 1rem;
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
  align-items:center;
  margin: 1rem 2rem;

  button {
    background: transparent;
    width: 100%;
    display:block;
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

  flex-shrink: 1;
`;
export const Main = styled.div`
  display: flex;
  width:100%;
  flex: 1;
  overflow-y: scroll;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;


`;
export const Footer = styled.footer`
  background: #f5f7fa;
  display: flex;
  height: 4rem;
  text-align: center;
  width: 100%;
  justify-items: center;
  justify-content: center;
`;