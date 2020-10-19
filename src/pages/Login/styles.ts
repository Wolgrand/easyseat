import styled from 'styled-components';
import { shade } from 'polished';

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

  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
    svg {
      margin-right: 16px;
    }
  }

  a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  img {
    height: fit-content;
    width: 80%;
    margin: 2rem;
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
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;

    margin: 1rem 0;
    line-height: 4rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    outline: 0;
    font: 500 2rem Roboto;
  }

  input::placeholder {
    color: var(--color-title-primary);
  }

  #password {
    margin-top: 2rem;
  }

  button {
    display: flex;
    flex: 1;
    justify-content: center;
    -webkit-appearance: none;

    margin: 1.5rem 0;
    line-height: 4rem;
    border-radius: 0.8rem;

    text-decoration: none;

    color: var(--color-title-primary);
    background: rgba(255, 255, 255, 0.3);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    a {
      button {
        display: flex;
        flex: 1;
        justify-content: center;
        -webkit-appearance: none;

        margin: 1.5rem 0;
        line-height: 4rem;
        border-radius: 0.8rem;

        text-decoration: none;

        color: var(--color-title-primary);
        background: rgba(255, 255, 255, 0.3);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }
  }
`;
