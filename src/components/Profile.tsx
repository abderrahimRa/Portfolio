import { TypeAnimation } from "react-type-animation";
import ContactNav from "./ContactNav";

const Profile = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-end p-4 sm:h-[90vh]">
      <div className="grid h-full w-full justify-center justify-items-center rounded-2xl border-4 border-[#3c9484] py-3 shadow-[0_0_2px_#3c9484,0_0_30px_#46b19b] sm:flex sm:items-center sm:justify-between sm:pl-4">
        <img
          src={"/Photos/profile-pic.png"}
          alt="Profile"
          className="max-[130]:bg-white h-[50vw] rounded-full sm:h-[30vw]"
        />
        <div className="above314:text-xl pt-6 size-fit font-bold text-white sm:flex sm:w-full sm:justify-center sm:pl-5 sm:pt-[20vh] sm:text-xl md:text-2xl">
          <TypeAnimation
            style={{
              height: "200px",
              display: "block",
              whiteSpace: "pre-line",
            }}
            sequence={[
              `Hi i am Abderrahim Khobizi\n\nI'am frontend developer\n\ni have other skills\n`,
              5000,
              "",
            ]}
            repeat={Infinity}
          />
        </div>
        <div className="pb-6 sm:flex sm:w-full sm:justify-center">
          <ContactNav menuIcons={[]}/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
