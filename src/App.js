import "./App.css";
import PostList from "./components/PostList";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <PostList></PostList>
    </div>
  );
}

export default App;
