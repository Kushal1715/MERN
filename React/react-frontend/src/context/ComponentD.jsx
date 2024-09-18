// components/ComponentD.js
import React, { useContext } from "react";
import { PersonContext } from "../store/PersonContext";

const ComponentD = () => {
  const { person } = useContext(PersonContext);

  if (!person) {
    return <div className="text-2xl">Loading...</div>;
  }

  return (
    <div className="text-2xl">
      <h1>Component D</h1>
      <h1>Person name: {person.name}</h1>
      <h1>Person age: {person.age}</h1>
      <h1>Person occupation: {person.occupation}</h1>
    </div>
  );
};

export default ComponentD;
