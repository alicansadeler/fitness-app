import { useState } from "react";
import Logo from "../../assets/logo.png";
import Link from "./Link";
import { Bars3Icon } from "@heroicons/react/20/solid";
import ActionButton from "../../shared/ActionButton";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const navBarBackGround = isTopOfPage
    ? ""
    : "bg-primary-100 drop-shadow shadow-lg";
  return (
    <nav>
      <div
        className={`${flexBetween} ${navBarBackGround} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} />

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} mt-2 gap-8 text-sm  `}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>

                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>

                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>

                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                </div>

                <div className={`${flexBetween}  mt-2 gap-8 `}>
                  <p className="font-dmssans text-sm">Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p-2">
                <Bars3Icon
                  onClick={() => setIsMenuToggle(!isMenuToggle)}
                  className="w-6 h-6"
                ></Bars3Icon>
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-72 bg-primary-100 drop-shadow shadow-lg">
          <div className="flex justify-end p-10">
            <button className="rounded-full ">
              <XMarkIcon
                onClick={() => setIsMenuToggle(!isMenuToggle)}
                className="w-6 h-6"
              ></XMarkIcon>
            </button>
          </div>

          <div className="ml-11 text-2xl flex flex-col gap-10">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>

            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>

            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>

            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
