import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactNavProps {
  icons: React.ElementType[];
}

const ContactNav: React.FC<ContactNavProps> = ({ icons }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-md overflow-hidden rounded-lg items-end justify-center border border-[#3c9484] bg-gray-900 shadow-[0_0_10px_#46b19b]"
    >
      <div className="p-6">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#46b19b]">
          Connect
        </h2>
        <div className="flex items-center justify-around">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-800 transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow:
                    hoveredIndex === index
                      ? "0 0 20px #46b19b, inset 0 0 10px #46b19b"
                      : "0 0 5px #3c9484",
                  backgroundColor:
                    hoveredIndex === index ? "#1e2a38" : "#1a202c",
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="text-3xl text-[#46b19b] transition-colors duration-300  group-hover:text-[#5cead6]"  />
              </motion.div>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="absolute -bottom-16 left-1/2 z-10 -translate-x-1/2 transform whitespace-nowrap rounded-md bg-[#46b19b] px-4 py-2 text-base font-semibold text-gray-900 shadow-lg"
                    style={{
                      boxShadow: "0 0 15px rgba(70, 177, 155, 0.5)",
                    }}
                  >
                    
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-[#46b19b] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default ContactNav;
