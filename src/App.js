import "./App.css";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import Mainbody from "./container/Mainbody";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Menu />
        </div>
        <div className="col-span-8">
          <Outlet />
          <Mainbody />
        </div>
        <div className="col-span-3 border-bordercolor border-l-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
