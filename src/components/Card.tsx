import React from "react";
import { motion } from "framer-motion";

interface Item {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

interface CardProps {
  item: Item;
  index: number;
  onClick: (id: string) => void;
}

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: -50,
    rotateX: -10,
    scale: 0.9,
    zIndex: 3 - i,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: i * -30,
    rotateX: 0,
    scale: 1 - i * 0.05,
    zIndex: 3 - i,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  hover: (i: number) => ({
    y: i * -40,
    scale: 1.1 - i * 0.05,
    zIndex: 4,
    boxShadow: "0 0 15px #3c9484, 0 0 30px #46b19b",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  }),
};

const Card: React.FC<CardProps> = ({ item, index, onClick }) => {
  return (
    <motion.div
      layoutId={item.id}
      onClick={() => onClick(item.id)}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      style={{
        position: "absolute",
        width: "100%",
        top: 0,
        backgroundColor: "#2d3748",
        borderRadius: "10px",
        padding: "20px",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 6px rgba(60, 148, 132, 0.1), 0 0 0 2px #3c9484",
        transition: "box-shadow 0.3s ease-in-out",
      }}
      className="hidden lg:flex lg:flex-col items-center justify-center text-white"
    >
      <motion.div className="mb-4 text-4xl">
        <item.icon />
      </motion.div>
      <motion.h2 className="mb-2 text-xl font-bold">{item.title}</motion.h2>
      <motion.h5 className="text-sm text-gray-300">{item.subtitle}</motion.h5>
    </motion.div>
  );
};

export default Card;