import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ContactNav from "./ContactNav";
import { BsFacebook, BsLinkedin, BsTelegram } from "react-icons/bs";
import Card from "./Card";
import ProfileText from "./ProfileText";
import ClickedCard from "./ClickedCard";

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

  return (
    <motion.div
      className="flex h-[calc(100vh-68px)] w-full bg-gray-900 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex w-full flex-col overflow-hidden rounded-3xl border-4 border-[#3c9484] bg-gray-800 shadow-[0_0_2px_#3c9484,0_0_30px_#46b19b]">
        <div className="flex flex-1 flex-col items-center justify-between p-6 sm:p-8 md:grid md:grid-cols-2 md:grid-rows-[auto_1fr_auto] lg:gap-8 lg:p-2">
          <motion.div
            className="md:grid md:w-full md:justify-center"
            variants={itemVariants}
          >
            <div className="inset-0 rounded-full bg-[#46b19b] opacity-0 blur-xl transition-all duration-300 group-hover:opacity-75 md:w-full lg:pt-6"></div>
            <img
              src="/Photos/profile-pic.png"
              alt="Profile"
              className="relative z-10 h-44 w-40 rounded-full border-4 border-[#3c9484] object-cover transition-all duration-300 hover:shadow-[0_0_15px_#3c9484] group-hover:border-[#46b19b] sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-60 lg:w-60"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProfileText />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full max-w-[300px] md:flex md:h-full md:max-w-[100vw] md:items-end md:justify-center md:pr-4"
          >
            <div className="flex h-fit w-full items-center justify-center lg:pb-0">
              <ContactNav icons={iconsList} />;
            </div>
          </motion.div>
          <div className="hidden items-end justify-center md:flex md:h-1/6 md:w-full lg:mb-10 xl:pb-8">
            <motion.div
              className="md:perspective-1000 hidden h-fit w-full md:relative md:mx-auto md:flex md:max-w-md"
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
      </div>

      <ClickedCard
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        cardItems={cardItems}
      />
    </motion.div>
  );
};

export default Profile;
