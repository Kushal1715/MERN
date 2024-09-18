import React from "react";
import ComponentA from "../context/ComponentA";
import PersonProvider from "../store/PersonContext";
import ComponentD from "../context/ComponentD";

const Show = () => {
  return (
    <>
      <PersonProvider>
        <ComponentA />
      </PersonProvider>
    </>
  );
};

export default Show;
