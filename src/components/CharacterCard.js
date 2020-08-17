import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.status}</p>
    </div>
  );
}
