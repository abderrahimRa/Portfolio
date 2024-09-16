import React from "react";
import { motion } from "framer-motion";

interface ContactNavProps {
  icons: React.ElementType[];
}

const ContactNav: React.FC<ContactNavProps> = ({ icons }) => {
  return (
    <div className=" w-full max-w-md lg:pb-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-[#3c9484] bg-gray-900 p-6 shadow-[0_0_10px_#46b19b]"
      >
        <h2 className="mb-4 text-center text-2xl font-bold text-[#46b19b]">
          Contact Me
        </h2>
        <div className="flex items-center justify-around">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #46b19b" }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-[#3c9484] bg-gray-800 p-3 transition-colors duration-200 hover:bg-gray-700"
            >
              <Icon className="text-3xl text-[#46b19b]" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactNav;
