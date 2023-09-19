import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";



function App() {
 // const [count, setCount] = useState(0);

  return (
    <>
       <Nav></Nav>
      <Home></Home>
    </>
  );
}

export default App;