import styled from 'styled-components';

export const Container = styled.div`

    margin:0;
    font-family: Arial, Helvetica, sans-serif;

    header {
      height: 150px;
  
    }

    
`;
export const Content = styled.div`
    background:#fff;
    width: 100%;
    height: calc(100vh - 150px);

#chat-container {
    flex-direction: column;
    display:flex;
    max-height: 100%;
    color:#fff;
    
}

#chat {
    width:100%;
    flex: 1;
    overflow-y: scroll;

    box-sizing: border-box;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
}
`;
export const Wrapper = styled.div`
display:flex;
    flex-direction: row;
    height: calc(100vh - 60px);
`;
export const SideBar = styled.div`
  background:gray;
    width: 15%;
    padding:1em;
`;

export const Header = styled.div`
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
  margin: 0.5rem auto;

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
  


`;
export const Footer = styled.footer`
  
`;