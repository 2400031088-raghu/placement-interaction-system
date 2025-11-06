import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "John", branch: "CSE" },
    { id: 2, name: "Priya", branch: "ECE" },
  ]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};
