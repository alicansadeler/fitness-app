import { useEffect, useState } from "react";
import Navbar from "./screen/navbar";
import Home from "./screen/home";
import Benefits from "./screen/benefits";
import OurClasses from "./screen/ourclasses";
import { SelectedPage } from "./shared/types";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

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
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
