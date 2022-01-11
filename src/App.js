import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router";
import Detail from "./Components/Detail";
import CustomerData from "./Components/CustomerData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trip" element={<CustomerData />} />
      <Route path="/trip/:customerslug" element={<Detail />} />
    </Routes>
  );
}

export default App;
