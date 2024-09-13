import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ContactNav from "./ContactNav";
import { BsFacebook, BsLinkedin, BsTelegram } from "react-icons/bs";
import Card from "./Card";

interface Item {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const Profile: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const iconsList = useMemo(() => [BsFacebook, BsLinkedin, BsTelegram], []);

  const cardItems: Item[] = useMemo(
    () => [
      {
        id: "1",
        title: "Web Development",
        subtitle: "Frontend Specialist",
        icon: BsFacebook,
      },
      {
        id: "2",
        title: "UI/UX Design",
        subtitle: "Creative Designer",
        icon: BsLinkedin,
      },
      {
        id: "3",
        title: "Mobile Development",
        subtitle: "React Native Expert",
        icon: BsTelegram,
      },
    ],
    [],
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="flex h-[calc(100vh-68px)] w-full bg-gray-900 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex w-full flex-col overflow-hidden rounded-3xl border-4 border-[#3c9484] bg-gray-800 shadow-[0_0_2px_#3c9484,0_0_30px_#46b19b]">
        <div className="flex flex-1 flex-col items-center justify-between p-6 sm:p-8 md:p-10 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] lg:gap-8">
          <motion.img
            src="/Photos/profile-pic.png"
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-[#3c9484] object-cover sm:h-40 sm:w-40 md:h-48 md:w-48 lg:ml-8 lg:h-64 lg:w-64 lg:justify-self-start"
            variants={itemVariants}
          />

          <motion.div
            className="flex items-center justify-center text-center text-xl font-bold text-white lg:justify-self-start lg:text-2xl"
            variants={itemVariants}
          >
            <TypeAnimation
              style={{
                display: "inline-block",
                whiteSpace: "pre-line",
              }}
              sequence={[
                `Hi, I am Abderrahim Khobizi\n\nI'm a frontend developer\n\nI have other skills`,
                5000,
                "",
              ]}
              repeat={Infinity}
              speed={50}
              deletionSpeed={65}
            />
          </motion.div>

          <motion.div
            className="col-span-1 flex h-full w-full items-center justify-center"
            variants={itemVariants}
          >
            <div className="flex w-full items-center justify-center pb-6 md:max-w-[300px] lg:pb-0">
              <ContactNav icons={iconsList} />
            </div>
          </motion.div>

          <motion.div
            className="perspective-1000 relative mx-auto h-[400px] w-full max-w-md"
            variants={containerVariants}
          >
            {cardItems.map((item, index) => (
              <Card
                key={item.id}
                item={item}
                index={index}
                onClick={setSelectedId}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              layoutId={selectedId}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="m-4 w-full max-w-md rounded-lg bg-gray-800 p-8 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = cardItems.find((item) => item.id === selectedId);
                return (
                  <>
                    <motion.div className="mb-6 flex justify-center text-6xl">
                      {item?.icon && React.createElement(item.icon)}
                    </motion.div>
                    <motion.h2
                      id="modal-title"
                      className="text-center text-3xl font-bold"
                    >
                      {item?.title}
                    </motion.h2>
                    <motion.h5
                      id="modal-description"
                      className="mt-2 text-center text-xl text-gray-300"
                    >
                      {item?.subtitle}
                    </motion.h5>
                    <motion.p className="mt-6 text-gray-400">
                      This is where you can add more detailed information about
                      your {item?.title.toLowerCase()} skills and experience.
                    </motion.p>
                    <motion.button
                      className="mt-8 w-full rounded-lg bg-[#3c9484] px-6 py-3 text-lg text-white transition-colors hover:bg-[#46b19b]"
                      onClick={() => setSelectedId(null)}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 15px #3c9484",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Profile;
