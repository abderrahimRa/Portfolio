import { ListItems } from "../App";
import NavBar from "../components/Navbar";
import Profile from "../components/Profile";

const Contact = () => {
  return (
    <div>
      <NavBar menuItems={ListItems} />
      <Profile className="">
        <div></div>
      </Profile>
    </div>
  );
};

export default Contact;
