import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import customer from "../data";

const TripleList = () => {
  const { diff } = useParams();
  const [diffic, setDiffic] = useState("");

  setDiffic(customer.filter((trip) => trip.difficulty === diff));
  return (
    <div>
      <div className="detail">
        <p>{diffic.name}</p>
        <img className="image" src={diffic.image} />
        <p>City: {diffic.city}</p>
        <p>Difficulty: {diffic.difficulty}</p>
        <p>length: {diffic.length}</p>
        <p>rating: {diffic.rating}</p>
      </div>
    </div>
  );
};

export default TripleList;
