import React from "react";
import { motion } from "framer-motion";
type Props = {
  id: string;
  children: React.ReactNode;
};

const Section = ({ children, id }: Props) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="my-20 p-10 bg-gray-100 rounded-lg"
    >
      {children}
    </motion.div>
  );
};

export default Section;
