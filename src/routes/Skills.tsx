import { ListItems } from "../App";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";

const Skills = () => {
  return (
    <div>
      <NavBar menuItems={ListItems} />
      <Profile children />
    </div>
  );
};

export default Skills;
