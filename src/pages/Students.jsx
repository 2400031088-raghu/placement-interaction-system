import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students } = useContext(StudentContext); // ✅ Now defined

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Registered Students</h2>
      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} — {s.branch}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
