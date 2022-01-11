import React from "react";
import { useState } from "react";
import customers from "../data";
import CustomerData from "./CustomerData";
import SearchBar from "./SearchBar";

const Home = () => {
  const [query, setQuery] = useState("");
  const customerList = customers
    .filter(
      (customer) =>
        customer.name.toLowerCase().includes(query.toLowerCase()) ||
        customer.city.toLowerCase().includes(query.toLowerCase())
    )
    .map((customer) => <CustomerData customer={customer} />);
  return (
    <div className="contents">
      <SearchBar setQuery={setQuery} />
      <div className="continers">{customerList}</div>
    </div>
  );
};

export default Home;
