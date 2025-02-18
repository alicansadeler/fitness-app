import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const offsets: Record<string, number> = {
    benefits: 20,
    ourclasses: 105,
    contactus: 1,
    default: 80,
  };

  const offsetValue = offsets[lowerCasePage] || offsets.default;
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-primary-500" : ""
        } transition duration-500 hover:text-primary-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        offset={offsetValue}
      >
        {page}
      </AnchorLink>
    </motion.div>
  );
};

export default Link;
