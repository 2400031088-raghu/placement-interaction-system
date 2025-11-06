import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [students, setStudents] = useLocalStorage("students", []);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, { id: Date.now(), ...student }]);
  };

  const removeStudent = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <AppContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </AppContext.Provider>
  );
};
