import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 3rem;

  flex-direction: column;
  

  color: var(--color-title-primary);
  background: var(--color-primary);

  img {
    height: 100%;
    width: 100%;
    

  }
`;


export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font: 500 5rem Roboto;
  }

  p {
    margin: 10px;
    font: 500 2rem Roboto;
  }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      display: flex;
      margin: 10px 0;
      font: 500 1.5rem Roboto;
      align-items: center;
      text-align: center;
      svg {
        align-items: center;
        margin-left: 0.5rem;
      }

  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;


  input {
    
    width: 100%;

    margin: 1rem 0;
    line-height: 4rem;
    background: transparent;
    border:none;
    border-bottom: 1px solid #fff;
    outline: 0;
    font: 400 1.8rem Roboto;
    

  }

  input::placeholder {
    color: var(--color-title-primary);

  }

  #password {
    margin-top: 2rem;
  }

  a {
    display: flex;
    flex:1;
    justify-content: center;


    margin: 1.5rem 0;
    line-height: 4rem;
    border-radius: 0.8rem;

    text-decoration: none;

    color: var(--color-title-primary);
    background: rgba(255, 255, 255, 0.3);

  }
`;