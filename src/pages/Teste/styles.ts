import styled from 'styled-components';

export const Container = styled.div`

    margin:0;
    font-family: Arial, Helvetica, sans-serif;

    header {
      height:60px;
      ul {
    list-style-type:none;
    margin:0;padding:0;
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
}

ul li a {
    padding: 20px;
    display:block;
}
    }

    
`;
export const Content = styled.div`
    background:lightgray;
    width: 100%;
    height: calc(100vh - 60px);

#chat-container {
    flex-direction: column;
    display:flex;
    max-height: 100%;
    color:gray;
    
}

#chat {
    width:100%;
    flex: 1;
    overflow-y: scroll;
    padding: 30px;
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

export const Header = styled.header`


`;
export const Filter = styled.div`


 
`;
export const Title = styled.div`
  
`;
export const Main = styled.div`
  


`;
export const Footer = styled.footer`
  
`;