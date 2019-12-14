import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{dimension}</p>
      <p>Type: {type} </p>
      <p>Residents: {residents}</p>
    </div>
  );
}
