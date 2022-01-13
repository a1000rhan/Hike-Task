import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import Detail from "./Components/Detail";
import CustomerData from "./Components/CustomerData";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path={"/:tripdiff"} element={<Home />} />
        <Route path="/trip" element={<CustomerData />} />
        <Route path="/trip/:customerslug" element={<Detail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
