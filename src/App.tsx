import { useState } from "react";
import "./App.css";
import Navbar from "./screen/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <p className="text-2xl">Ali Can SADELER</p>
    </>
  );
}

export default App;
