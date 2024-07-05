import "./App.css";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <Menu />

        <div className="absolute top-0 right-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
