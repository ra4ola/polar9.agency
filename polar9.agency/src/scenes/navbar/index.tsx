import { useState } from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "../../assets/logo.svg";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage : boolean;
    selectedPage :SelectedPage;
    setSelectedPage : (value:SelectedPage) => void
}

const NavBar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {

    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "bg-black text-white" : "text-white";

  return <nav className="bg-black">
    <div
    className={`${navbarBackground} ${flexBetween} fixed top-0 z-20 w-full py-1`}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
            
            {/*Left Side */ }
            <div className={`${flexBetween} h-fit gap-16 rounded-full`}>
                {/* Logo*/ }
                <img src={Logo} alt="logo" width={isAboveMediumScreens ? "200" : "75"} />
            </div>

            {/* Right Side */ }
            {isAboveMediumScreens ? (
            <div className={`flex items-center justify-end w-full gap-20`}>
                {/* Links 
                <div className={`${flexBetween} gap-10 text-md`}>
                    <Link
                    page = "Contact Us" 
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage} />
                </div>
                <div className={`${flexBetween} gap-10 text-md`}>
                    <Link
                    page = "Services" 
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage} />
                </div>
                */}
                {/*Contact Us  
                <ActionButton setSelectedPage = {setSelectedPage}></ActionButton>*/}
            </div>
            ):(
            <button 
            className="rounded-full bg-red p-1"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
                <Bars3Icon className="h-6 w-6 text-white"/>
            </button>
            )}
        </div>
    </div>
    {/* Mobile Menu */}
    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed top-0 w-full h-full bg-black opacity p-2 z-40">
            {/*Close Icon  */}
            <div className="flex justify-end p-12">
                <button 
                className="rounded-full bg-white p-1"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <XMarkIcon className="h-6 w-6 text-black"/>
                </button>
            </div>
            {/* Menu Items */}
            <div className={`${flexBetween} flex flex-col ali gap-10 text-2xl text-white font-montserrat`}>
                    <Link
                    page = "Sobre Nós" 
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage} />
                    <Link
                    page = "Nosso Serviço" 
                    selectedPage = {selectedPage}
                    setSelectedPage = {setSelectedPage} />    
                {/*Contact Us  */}
                <div className="">
                    
                <ActionButton setSelectedPage = {setSelectedPage}>Fale Conosco</ActionButton>            
                </div>
                </div>


        </div>
    )
    }

  </nav>
}

export default NavBar;