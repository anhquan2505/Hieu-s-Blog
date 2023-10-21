"use client";

import { createContext, useEffect, useState } from "react";
import dbjson from "../database.json"
export const DatabaseContext = createContext();


export const DatabaseContextProvider = ({ children }) => {
  const [database, setDatabase] = useState(dbjson.db);

  useEffect(() => {
    // To do set db
  }, []);

  return (
    <DatabaseContext.Provider value={database}>
      {children}
    </DatabaseContext.Provider>
  );
};
