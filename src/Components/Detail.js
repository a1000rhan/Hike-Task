import React from "react";

import { Navigate, useParams } from "react-router-dom";
import customers from "../data";
import CustomerData from "./CustomerData";

function Detail() {
  const { customerslug } = useParams();
  const trips = customers.find((trip) => trip.slug === customerslug);
  if (!trips) {
    return <Navigate to=" /404" />;
  }
  const recommended = customers
    .filter((reco) => reco.difficulty === trips.difficulty)
    .map((trip) => <CustomerData customer={trip} />);

  return (
    <div>
      <div className="detail">
        <p>{trips.name}</p>
        <img className="image" src={trips.image} />
        <p>City: {trips.city}</p>
        <p>Difficulty: {trips.difficulty}</p>
        <p>length: {trips.length}</p>
        <p>rating: {trips.rating}</p>
      </div>
      <div className="recommended">{recommended}</div>
    </div>
  );
}

export default Detail;
