import "./App.css";
import NavBar from "./components/Navbar";
import Profile from "./components/Profile";
import "./index.css";

const ListItems: string[] = [
  // TODO:
  "History",
  "Hope",
  "experience",
  "skills",
  "contact",
];

const App = () => (
  <div className="flex flex-col h-screen">
    <NavBar menuItems={ListItems} />
    <Profile />
  </div>
);

export default App;
