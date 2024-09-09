import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import "./index.css";

const ListItems: string[] = ["Home", "Experience", "Skills", "Contact"];


const App = () => (
  <div className="flex h-screen flex-col">
    {/* Passing menuItems and icons to NavBar */}
    <Navbar menuItems={ListItems} />
    <Profile />
  </div>
);

export default App;
