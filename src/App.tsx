import "./App.css";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import "./index.css";

const ListItems: string[] = ["Home", "experience", "skills", "contact"];


const App = () => (
  <div className="flex h-screen flex-col">
    <NavBar menuItems={ListItems} />
    <Profile></Profile>
    
  </div>
);

export default App;
