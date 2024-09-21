import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from "react-icons/ri";

interface NumListIcon {
  id: string;
  icon: React.ElementType;
  insideHeader: string;
  insideText: string;
}

interface NumProps {
  className?: string;
}

const NumList: React.FC<NumProps> = ({ className }) => {
  const IconList = useMemo(
    () => [RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5],
    [],
  );
  const Listed: NumListIcon[] = useMemo(
    () => [
      {
        id: "1",
        icon: IconList[0],
        insideHeader: "Freelance Web Developer",
        insideText:
          "Developing modern, responsive websites with a focus on frontend and full-stack development. Proficient in React, Tailwind CSS. Experienced in building projects with Vite and utilizing TypeScript for type safety. Specialized in optimizing websites for performance and scalability while maintaining clean, maintainable code.",
      },
      {
        id: "2",
        icon: IconList[1],
        insideHeader: "IoT Medical Project",
        insideText:
          "Built an innovative IoT system using an ESP32 microcontroller to monitor patient health data. Developed a web-based dashboard for healthcare professionals to view real-time patient biodata. Employed technologies like HTML, CSS, JavaScript, Bootstrap, Tailwind, MySQL, Node.js, and Express. Achieved a thesis score of 17.5/20.",
      },
      {
        id: "3",
        icon: IconList[2],
        insideHeader: "Chess Enthusiast",
        insideText:
          "Developed advanced problem-solving and critical thinking skills through chess, achieving an Elo rating of 2150 in online platforms. Regularly competes in over-the-board tournaments, consistently beating players with ratings of 1700 and above.",
      },
      {
        id: "4",
        icon: IconList[3],
        insideHeader: "Master's Student in Industrial Engineering",
        insideText:
          "Currently pursuing a Master's degree in Industrial Engineering with a focus on System Engineering at the University of Tlemcen. Gained in-depth knowledge of optimization algorithms, particularly those used in industrial engineering applications.",
      },
      {
        id: "5",
        icon: IconList[4],
        insideHeader: "Frontend Developer for Portfolio Projects",
        insideText:
          "Actively learning and applying React in various portfolio project, focusing on responsive design, animation (Framer Motion), and user experience. Experience with React components, props, state management, and Tailwind CSS. Created a responsive, interactive portfolio with visually appealing elements, such as neon effects, hover animations, and typewriting text.",
      },
    ],
    [IconList],
  );

  const [selectedItem, setSelectedItem] = useState<NumListIcon | null>(
    Listed[0],
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex h-full w-full flex-col items-start p-4 md:flex-row md:space-x-8 md:space-y-0 md:p-8">
      <div
        className={`${className} relative flex h-full w-full flex-col items-center md:w-fit`}
      >
        {Listed.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div
              className="group relative"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedItem(item)}
            >
              <motion.div
                className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-800 transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow:
                    hoveredIndex === index || selectedItem?.id === item.id
                      ? "0 0 20px rgba(70, 177, 155, 0.4), inset 0 0 10px rgba(70, 177, 155, 0.4)"
                      : "0 0 5px rgba(60, 148, 132, 0.2)",
                  backgroundColor:
                    hoveredIndex === index || selectedItem?.id === item.id
                      ? "#1e2a38"
                      : "#1a202c",
                }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="text-3xl text-[#46b19b] transition-colors duration-300 group-hover:text-[#5cead6]" />
              </motion.div>
            </motion.div>
            {index < Listed.length - 1 && (
              <motion.div
                className="h-8 w-0.5 bg-[#46b19b]"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  boxShadow: "0 0 8px rgba(70, 177, 155, 0.4)",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.div
            key={selectedItem.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="flex w-full flex-col rounded-lg bg-gray-800 p-4 text-white shadow-lg md:w-2/3 md:p-8"
            style={{
              boxShadow:
                "0 0 20px rgba(70, 177, 155, 0.4), inset 0 0 10px rgba(70, 177, 155, 0.4)",
              border: "2px solid rgba(70, 177, 155, 0.3)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-4 text-2xl font-bold text-[#46b19b] md:text-4xl"
              style={{
                textShadow: "0 0 10px rgba(70, 177, 155, 0.7)",
              }}
            >
              {selectedItem.insideHeader}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-base leading-relaxed md:text-lg"
            >
              {selectedItem.insideText}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NumList;
