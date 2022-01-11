import React from "react";
import customer from "../data";
import { useParams } from "react-router-dom";

function Detail() {
  const { customerslug } = useParams();
  const trips = customer.find((trip) => trip.slug === customerslug);
  return (
    <div className="one-trip">
      <p>{trips.name}</p>
      <img className="image" src={trips.image} />
      <p>City: {trips.city}</p>
      <p>Difficulty: {trips.difficulty}</p>
      <p>length: {trips.length}</p>
      <p>rating: {trips.rating}</p>
    </div>
  );
}

export default Detail;