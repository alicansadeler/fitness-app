import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const loverCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage == loverCasePage ? "text-primary-500" : ""}`}
      href={`#${loverCasePage}`}
      onClick={() => setSelectedPage(loverCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
