import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({  }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <footer className="bg-black text-gray-400 py-4 font-sans ">
      <div className="container mx-auto">
        {isAboveMediumScreens ? (
          <div className="flex justify-center items-center gap-6 p-4">
            <div>
              <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
            </div>
            <div>
              <ul className="flex space-x-4">
              <li>
                  <a href="#" className="hover:text-red-400">Email: contact@polar9.agency</a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <div >
              <p className="text-sm">© 2024 Polar 9. All rights reserved.</p>
            </div>
            <div >
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="hover:text-red-400">Email: contact@polar9.agency</a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
