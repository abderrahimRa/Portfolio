import { TypeAnimation } from "react-type-animation";
import ContactNav from "./ContactNav";
import { BsFacebook, BsLinkedin, BsTelegram } from "react-icons/bs";

const Profile = () => {
  const iconsList = [BsFacebook, BsLinkedin, BsTelegram];

  return (
    <div className="flex h-[calc(100vh-68px)] w-full p-4">
      <div className="flex w-full flex-col overflow-hidden rounded-3xl border-4 border-[#3c9484] bg-gray-800 shadow-[0_0_2px_#3c9484,0_0_30px_#46b19b]">
        <div className="flex flex-1 flex-col items-center justify-between p-6 sm:p-8 md:p-10 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] lg:gap-8">
          <img
            src="/Photos/profile-pic.png"
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-[#3c9484] object-cover sm:h-40 sm:w-40 md:h-48 md:w-48 lg:ml-8 lg:h-64 lg:w-64 lg:justify-self-start"
          />

          <div className="flex items-center justify-center text-center text-xl font-bold text-white lg:justify-self-start lg:text-2xl">
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
          </div>

          <div className="col-span-2 flex w-full items-center justify-center">
            <div className="w-full pb-6 md:max-w-[60%] lg:pb-0">
              <ContactNav icons={iconsList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
