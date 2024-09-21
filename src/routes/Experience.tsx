import { ListItems } from "../App";
import NavBar from "../components/Navbar";
import NumList from "../components/NumList";
import Profile from "../components/Profile";

const Experience = () => {
  return (
    <div className="">
      <NavBar menuItems={ListItems} />
      <Profile className="">
        <NumList/>
        
      </Profile>
    </div>
  );
};

export default Experience;
