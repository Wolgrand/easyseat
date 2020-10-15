import styled from 'styled-components';

export const Container = styled.div`
  background: var(--secondary);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  h1 {
    color: var(--primary-font-color);

  }

  img {
    max-width: auto;
    height: 65%;
    border-radius: 50%;

  }
`;
