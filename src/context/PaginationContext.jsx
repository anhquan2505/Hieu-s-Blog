"use client";

import { createContext, useEffect, useState } from "react";

export const PaginationContext = createContext();


export const PaginationContextProvider = ({ children }) => {
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    // To do set db
  }, []);

  return (
    <PaginationContext.Provider value={{pagination, setPagination}}>
      {children}
    </PaginationContext.Provider>
  );
};
