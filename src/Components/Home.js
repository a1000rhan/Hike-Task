import React from "react";
import { useState } from "react";
import customers from "../data";
import CustomerData from "./CustomerData";
import SearchBar from "./SearchBar";
import { Navigate } from "react-router-dom";

import { useParams } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [slider, setSlider] = useState(0);
  const [drop, setDrop] = useState("all");
  const customerList = customers
    .filter(
      (customer) =>
        customer.name.toLowerCase().includes(query.toLowerCase()) ||
        customer.city.toLowerCase().includes(query.toLowerCase())
    )
    .filter((customer) => customer.length > slider)
    .filter((customer) => {
      if (drop === "all") {
        return customer;
      } else if (customer.difficulty === drop) {
        return drop;
      }
    })
    .map((customer) => <CustomerData customer={customer} />);
  if (!customerList) {
    return <Navigate to={"/404"} />;
  }
  return (
    <div>
      <div className="contents">
        <SearchBar setQuery={setQuery} />

        <div className="slider">
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="50"
            onChange={(e) => setSlider(e.target.value)}
          />
          <p>{slider}</p>
        </div>
        <select
          name="difficulty"
          id="difficulty"
          onChange={(e) => setDrop(e.target.value)}
        >
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <div className="continers">{customerList}</div>
      </div>
    </div>
  );
};

export default Home;
