import "./App.css";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import Mainbody from "./container/Mainbody";

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <Menu />

        <div className="absolute top-0 right-0 overflow-x-hidden w-[23%] p-4 min-h-screen border-l-2 border-bordercolor">
          <Sidebar />
        </div>
      </div>

      <Mainbody />
    </div>
  );
}

export default App;
