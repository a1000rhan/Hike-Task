import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const CustomerData = ({ customer }) => {
  if (!customer) {
    return <Navigate to="/404" />;
  }
  return (
    <div className="one-trip">
      <p>{customer.name}</p>
      <Link to={`/trip/${customer.slug}`}>
        <img className="image" src={customer.image} />
      </Link>
      <p>City: {customer.city}</p>
      <p>Difficulty: {customer.difficulty}</p>
      <p>length: {customer.length}</p>
      <p>rating: {customer.rating}</p>
    </div>
  );
};

export default CustomerData;
