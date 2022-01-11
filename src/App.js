import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import Detail from "./Components/Detail";
import CustomerData from "./Components/CustomerData";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import TripleList from "./Components/TripleList";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trip" element={<CustomerData />} />
        <Route path="/trip/:customerslug" element={<Detail />} />

        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
