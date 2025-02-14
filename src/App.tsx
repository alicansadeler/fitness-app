import { useEffect, useState } from "react";
import Navbar from "./screen/navbar";
import Home from "./screen/home";
import Benefits from "./benefits";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY != 0) {
        setIsTopOfPage(false);
      }
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage}></Navbar>
        <Home />
        <Benefits />
      </div>
    </>
  );
}

export default App;
