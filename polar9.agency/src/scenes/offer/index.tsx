import React from 'react';
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Offer = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="offer" className="bg-black h-full w-full items-center justify-center text-white font-sans">
      {isAboveMediumScreens ? (
        <div className="flex flex-col items-center justify-center h-full gap-6 p-40">
          <p className="text-2xl font-montserrat">Nossa Oferta</p>
          <h1 className="text-5xl m-5">Descubra nossos serviços exclusivos</h1>
          <h1 className="text-2xl m-5 text-white-300 font-montserrat">Saiba como podemos ajudar o seu negócio a crescer</h1>
          <p className="text-4xl text-center mt-4"></p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Entre em contato
          </ActionButton>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full p-5 text-center">
          <p className="text-2xl font-montserrat">Nossa Oferta</p>
          <h1 className="text-5xl m-5">Descubra nossos serviços exclusivos</h1>
          <h1 className="text-2xl m-5 text-white-300 font-montserrat">Saiba como podemos ajudar o seu negócio a crescer</h1>
          <p className="text-4xl text-center mt-4"></p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Entre em contato
          </ActionButton>
        </div>
      )}
    </section>
  );
};

export default Offer;

