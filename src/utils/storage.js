// src/utils/storage.js

// ========== STUDENT STORAGE ==========
export const saveStudents = (students) => {
  localStorage.setItem("students", JSON.stringify(students));
};

export const getStudents = () => {
  const data = localStorage.getItem("students");
  return data ? JSON.parse(data) : [];
};

export const addStudentToStorage = (student) => {
  const students = getStudents();
  const updated = [...students, student];
  saveStudents(updated);
  return updated;
};

// ========== COMPANY STORAGE ==========
export const saveCompanies = (companies) => {
  localStorage.setItem("companies", JSON.stringify(companies));
};

export const getCompanies = () => {
  const data = localStorage.getItem("companies");
  return data ? JSON.parse(data) : [];
};

export const addCompanyToStorage = (company) => {
  const companies = getCompanies();
  const updated = [...companies, company];
  saveCompanies(updated);
  return updated;
};
