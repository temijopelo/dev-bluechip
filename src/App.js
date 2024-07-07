import "./App.css";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import Mainbody from "./container/Mainbody";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="lg:grid xl:grid xl:grid-cols-12">
        <div className="hidden xl:block xl:col-span-1">
          <Menu />
        </div>
        <div className="xl:col-span-8">
          <Outlet />
          <div className="">
            <Mainbody />
          </div>
        </div>
        <div className="hidden xl:block xl:col-span-3 xl:border-bordercolor xl:border-l-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
