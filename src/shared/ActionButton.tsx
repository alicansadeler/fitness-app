import AnchorLink from "react-anchor-link-smooth-scroll";
import { ReactNode } from "react";
import { SelectedPage } from "./types";

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink 
      className="bg-secondary-500 rounded-lg py-2 px-10 hover:bg-primary-500 hover:text-white transition duration-300 hover:duration-500 text-center"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href="#contactus"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
