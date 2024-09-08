import { TypeAnimation } from "react-type-animation";

const ProfileText = () => {
  return (
    <div className="text-xl font-bold text-white">
      <TypeAnimation
        style={{
          height: "300px",
          display: "block",
        }}
        sequence={[
          `Hi iam Abderrahim Khobizi\n I'am frontend developer\ni have others skills want to see more ? \n`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
          5000,
          "",
        ]}
        repeat={Infinity}
      />
    </div>
  );
};

export default ProfileText;
