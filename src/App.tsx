import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const ListItems: string[] = ["Home", "Experience", "Skills", "Contact"];

const App = () => (
  <div className="flex h-screen flex-col bg-gray-900">
    <Navbar menuItems={ListItems} />
    <Profile />
  </div>
);

export default App;
