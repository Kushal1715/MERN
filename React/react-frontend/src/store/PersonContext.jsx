// store/PersonContext.js
import { createContext, useState } from "react";

export const PersonContext = createContext();

const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: "Ram",
    age: 18,
    occupation: "Farmer",
  });

  return (
    <PersonContext.Provider value={{ person }}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;
