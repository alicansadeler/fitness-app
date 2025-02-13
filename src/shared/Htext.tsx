import React from "react";

type Props = {
  children: React.ReactNode;
};

const Htext = ({ children }: Props) => {
  return (
    <div className="uppercase text-3xl font-bold mb-4 mt-2">{children}</div>
  );
};

export default Htext;
