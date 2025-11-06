import React, { createContext, useState } from "react";

// Create context
export const UserContext = createContext();

// Create provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // You can add more values here later (like login, logout etc.)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
