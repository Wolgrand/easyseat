import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  width: 100%;
  display: flex;
  height: 12rem;
  flex: 1;
  border-radius: 10px;
  padding: 2rem 1rem;
  line-height: 2rem;
  margin-top: 1rem;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;

  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  font-weight: 300;

  div {
    display: flex;
    flex-direction: row;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;


  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-weight: bold;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    font-weight: 300;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
export const Chart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  position: relative;
`;
