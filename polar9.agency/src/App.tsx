import { useEffect, useState } from "react";
import NavBar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import AboutUs from "./scenes/aboutus";
import OurProcess from "./scenes/process";
import Offer from "./scenes/offer";
import Footer from "./scenes/footer";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0)
      {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0)
      {
        setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  })

  return (
    <>
    <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <Home setSelectedPage={setSelectedPage}/>
    <AboutUs setSelectedPage={setSelectedPage}/> 
    <OurProcess setSelectedPage={setSelectedPage}></OurProcess>
    <Offer setSelectedPage={setSelectedPage}></Offer>
    <Footer setSelectedPage={setSelectedPage}></Footer>
    </>
  )
}

export default App;