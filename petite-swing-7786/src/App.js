import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar"
import Home from "./pages/Home/Home";
import { Login } from "./Auth/Login";
import { Sign } from "./Auth/Sign";
// import RequireAuth from "./Auth/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route path={"/"} element={ <Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sign"} element={<Sign />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
