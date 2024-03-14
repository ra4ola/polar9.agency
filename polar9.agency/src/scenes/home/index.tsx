import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MotionConfig, motion } from "framer-motion";
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="bg-black h-full w-full  items-center justify-center text-white font-sans ">
      {isAboveMediumScreens ? 
      (
          <div className="flex flex-col items-center justify-center h-full gap-6 p-40">
            <p className="text-2xl font-montserrat">Cresca o seu negócio sem esforços extra</p>
            <h1 className="text-5xl m-5">Transformamos o seu Negócio num <span className = "text-red-500 font-light">Íman de Vendas</span></h1>
            <h1 className="text-2xl m-5 text-white-300 font-montserrat">Geramos oportunidades para o seu negócio, sem nunca que de abrir o computador</h1>
            <p className="text-4xl text-center mt-4"></p>
            <ActionButton setSelectedPage={setSelectedPage}>
              Marca uma reunião
              </ActionButton>
          </div>
      ) 
      : 
      (
        <div className="flex flex-col items-center justify-center h-full w-full p-5 text-center">
          <p className="text-2xl font-montserrat">Cresca o seu negócio sem esforços extra</p>
          <h1 className="text-5xl m-5">Transformamos o seu Negócio num <span className = "text-red-500 font-light">Íman de Vendas</span></h1>
          <h1 className="text-2xl m-5 text-white-300 font-montserrat">Geramos oportunidades para o seu negócio, sem nunca que de abrir o computador</h1>
          <p className="text-4xl text-center mt-4"></p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Marca uma reunião
            </ActionButton>
        </div>
      )}
    </section>
  );
};

export default Home;