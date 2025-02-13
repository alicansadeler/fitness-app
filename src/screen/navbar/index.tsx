import logo from "../../assets/logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon } from "@heroicons/react/16/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navBarBackground = isTopOfPage
    ? ""
    : "bg-primary-100 drop-shadow shadow-lg";
  return (
    <div
      className={`${flexBetween} ${navBarBackground} fixed top-0 z-30 w-full py-6`}
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <img src={logo} alt="logo" />
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} mt-4 gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={SelectedPage.Home}
                  setSelectedPage={setSelectedPage}
                ></Link>
                <Link
                  page="Benefits"
                  selectedPage={SelectedPage.Benefits}
                  setSelectedPage={setSelectedPage}
                ></Link>
                <Link
                  page="Our Classes"
                  selectedPage={SelectedPage.OurClasses}
                  setSelectedPage={setSelectedPage}
                ></Link>
                <Link
                  page="Contact Us"
                  selectedPage={SelectedPage.ContactUs}
                  setSelectedPage={setSelectedPage}
                ></Link>
              </div>
            </div>
          ) : (
            <button className="rounded-full bg-secondary-500 p-2">
              <Bars3Icon className="w-6 h-6"></Bars3Icon>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
