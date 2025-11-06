import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Container, TextField, Button, Typography } from "@mui/material";

export default function AddStudent() {
  const { addStudent } = useContext(AppContext);
  const [form, setForm] = useState({ name: "", branch: "", year: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.branch && form.year) {
      addStudent(form);
      setForm({ name: "", branch: "", year: "" });
      alert("Student added successfully!");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">Add Student</Typography>
      <form onSubmit={handleSubmit}>
        {["name", "branch", "year"].map((field) => (
          <TextField
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            fullWidth
            sx={{ mt: 2 }}
            value={form[field]}
            onChange={handleChange}
          />
        ))}
        <Button variant="contained" type="submit" sx={{ mt: 3 }}>
          Add Student
        </Button>
      </form>
    </Container>
  );
}
