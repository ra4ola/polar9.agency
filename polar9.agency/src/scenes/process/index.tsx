import { FiClipboard, FiMonitor, FiUsers } from "react-icons/fi";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurProcess = ({ }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

 

  return (
    <section id="process" className="bg-black min-h-full w-full items-center justify-center text-white font-sans">
      {isAboveMediumScreens ? (
        <div className="flex flex-col items-center justify-center h-full gap-6 p-40">
          <p className="text-5xl font-montserrat p-40">Nosso Processo</p>
          <div className="flex justify-center gap-8">
            <div className="bg-gray-800 rounded-lg p-6" >
              <FiClipboard className="text-4xl mb-4" />
              <h2 className="text-xl font-bold mb-4">Recolha de Conteúdo</h2>
              <p className="text-white-300">Começamos recolhendo fotografias e vídeos do seu negócio, produtos ou resultados. Essa é a base da nossa estratégia para atrair um maior número de potenciais clientes, destacando o que sua empresa tem de melhor.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6" >
              <FiMonitor className="text-4xl mb-4" />
              <h2 className="text-xl font-bold mb-4">Lançamento de Anúncios</h2>
              <p className="text-white-300">Em seguida, lançamos anúncios cuidadosamente elaborados com base no conteúdo que recolhemos. Esses anúncios são estrategicamente projetados e colocados em plataformas de social media populares para capturar a atenção do seu público-alvo.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6" >
              <FiUsers className="text-4xl mb-4" />
              <h2 className="text-xl font-bold mb-4">Aquisição e Qualificação de Clientes</h2>
              <p className="text-white-300">Por fim, coletamos informações de indivíduos genuinamente interessados em seu produto ou serviço, priorizando clientes prontos para comprar. Isso nos permite direcionar nossos esforços para aqueles mais propensos a converter, otimizando seus resultados.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-fit p-10 gap-8 text-center">
          <p className="text-4xl font-sans p-4 pt-10">Nosso Processo</p>
          <div className="flex flex-col gap-2 mt-6">
            <div className="bg-gray-800 rounded-lg p-6" >
            <div className="flex flex-col items-center justify-center">
                    <FiClipboard className="text-4xl mb-4" />
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold mb-4">Recolha de Conteúdo</h2>
                        <p className="text-white-300">Começamos recolhendo fotografias e vídeos do seu negócio, produtos ou resultados. Essa é a base da nossa estratégia para atrair um maior número de potenciais clientes, destacando o que sua empresa tem de melhor.</p>
                        </div>
                        </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6" >
            <div className="flex flex-col items-center justify-center">
              <FiMonitor className="text-4xl mb-4" />
              <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-4">Lançamento de Anúncios</h2>
              <p className="text-white-300">Em seguida, lançamos anúncios cuidadosamente elaborados com base no conteúdo que recolhemos. Esses anúncios são estrategicamente projetados e colocados em plataformas de social media populares para capturar a atenção do seu público-alvo.</p>
              </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6" >
            <div className="flex flex-col items-center justify-center">
              <FiUsers className="text-4xl mb-4"/>
              <div className="flex flex-col items-center justify">
              <h2 className="text-xl font-bold mb-4">Aquisição e Qualificação de Clientes</h2>
              <p className="text-white-300">Por fim, coletamos informações de indivíduos genuinamente interessados em seu produto ou serviço, priorizando clientes prontos para comprar. Isso nos permite direcionar nossos esforços para aqueles mais propensos a converter, otimizando seus resultados.</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProcess;
