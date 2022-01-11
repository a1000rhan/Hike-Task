import React from "react";

const CustomerData = ({ customer }) => {
  return (
    <div className="one-trip">
      <p>{customer.name}</p>
      <img className="image" src={customer.image} />
      <p>City: {customer.city}</p>
      <p>Difficulty: {customer.difficulty}</p>
      <p>length: {customer.length}</p>
      <p>rating: {customer.rating}</p>
    </div>
  );
};

export default CustomerData;
