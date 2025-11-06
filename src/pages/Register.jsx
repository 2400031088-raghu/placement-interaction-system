import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material";
import {
  addStudentToStorage,
  getStudents,
  addCompanyToStorage,
  getCompanies,
} from "../utils/storage";

export default function Register() {
  // Toggle between Student / Company
  const [type, setType] = useState("student");

  // Form and lists
  const [form, setForm] = useState({});
  const [students, setStudents] = useState(getStudents());
  const [companies, setCompanies] = useState(getCompanies());

  // Switch type (student/company)
  const handleTypeChange = (_, newType) => {
    if (newType) {
      setType(newType);
      setForm({});
    }
  };

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "student") {
      if (!form.name || !form.branch || !form.year) {
        alert("Please fill all fields for student registration.");
        return;
      }

      const newStudent = { id: Date.now(), ...form };
      const updated = addStudentToStorage(newStudent);
      setStudents(updated);
      alert("✅ Student registered successfully!");
    } else {
      if (!form.name || !form.domain || !form.contact) {
        alert("Please fill all fields for company registration.");
        return;
      }

      const newCompany = { id: Date.now(), ...form };
      const updated = addCompanyToStorage(newCompany);
      setCompanies(updated);
      alert("🏢 Company registered successfully!");
    }

    setForm({});
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Registration Portal
      </Typography>

      {/* Toggle Section */}
      <ToggleButtonGroup
        color="primary"
        value={type}
        exclusive
        onChange={handleTypeChange}
        sx={{ mb: 3 }}
      >
        <ToggleButton value="student">Student</ToggleButton>
        <ToggleButton value="company">Company</ToggleButton>
      </ToggleButtonGroup>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />

        {type === "student" ? (
          <>
            <TextField
              fullWidth
              label="Branch"
              name="branch"
              value={form.branch || ""}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Year"
              name="year"
              value={form.year || ""}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </>
        ) : (
          <>
            <TextField
              fullWidth
              label="Domain"
              name="domain"
              value={form.domain || ""}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Contact Email"
              name="contact"
              value={form.contact || ""}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </>
        )}

        <Button type="submit" variant="contained" color="primary">
          Register {type === "student" ? "Student" : "Company"}
        </Button>
      </form>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Display Registered Data */}
      <Typography variant="h5" gutterBottom>
        Registered {type === "student" ? "Students" : "Companies"}
      </Typography>

      {type === "student" ? (
        students.length === 0 ? (
          <Typography>No students registered yet.</Typography>
        ) : (
          students.map((s) => (
            <Typography key={s.id} sx={{ mt: 1 }}>
              {s.name} — {s.branch} ({s.year})
            </Typography>
          ))
        )
      ) : companies.length === 0 ? (
        <Typography>No companies registered yet.</Typography>
      ) : (
        companies.map((c) => (
          <Typography key={c.id} sx={{ mt: 1 }}>
            {c.name} — {c.domain} ({c.contact})
          </Typography>
        ))
      )}
    </Container>
  );
}
