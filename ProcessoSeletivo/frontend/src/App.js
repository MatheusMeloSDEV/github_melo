import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom"
import Menu from "./components/Menu.js"
import Content from "./components/Content.js";

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Content></Content>
      <Menu/>
    </BrowserRouter>
    </>
  );

}

export default App;