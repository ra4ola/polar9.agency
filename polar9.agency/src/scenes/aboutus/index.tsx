import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MotionConfig, motion } from "framer-motion";
import { DEFAULT_BREAKPOINTS } from "react-bootstrap/esm/ThemeProvider";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="about" className="bg-white h-full w-full items-center justify-center text-black font-sans">
      {isAboveMediumScreens ? (
        <div className="flex flex-col items-center justify-center h-full gap-6 p-40">
          <p className="text-2xl font-montserrat">Quem somos nós?</p>
          <h1 className="text-5xl m-5">Descubra mais sobre nossa história e missão</h1>
          <h1 className="text-2xl m-5 text-white-300 font-montserrat">Saiba como estamos transformando negócios e ajudando clientes</h1>
          <p className="text-4xl text-center mt-4"></p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Entre em contato
          </ActionButton>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full p-5 text-center">
          <p className="text-2xl font-montserrat">Quem somos nós?</p>
          <h1 className="text-5xl m-5">Descubra mais sobre nossa história e missão</h1>
          <h1 className="text-2xl m-5 text-white-300 font-montserrat">Saiba como estamos transformando negócios e ajudando clientes</h1>
          <p className="text-4xl text-center mt-4"></p>
        </div>
      )}
    </section>
  );
};

export default AboutUs;
