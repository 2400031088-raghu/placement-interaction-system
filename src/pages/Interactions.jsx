import { useState, useEffect } from "react";
import { Container, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";


export default function Interactions() {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [interactions, setInteractions] = useState(() => {
    const data = localStorage.getItem("interactions");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    setStudents(getStudents());
    setCompanies(getCompanies());
  }, []);

  const handleAddInteraction = () => {
    if (!selectedStudent || !selectedCompany) {
      alert("Please select both a student and a company");
      return;
    }
    const newInteraction = { id: Date.now(), student: selectedStudent, company: selectedCompany };
    const updated = [...interactions, newInteraction];
    setInteractions(updated);
    localStorage.setItem("interactions", JSON.stringify(updated));
    alert("Interaction added!");
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student–Company Interactions
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <FormControl fullWidth>
          <InputLabel>Student</InputLabel>
          <Select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
            {students.map((s) => (
              <MenuItem key={s.id} value={s.name}>
                {s.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Company</InputLabel>
          <Select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
            {companies.map((c) => (
              <MenuItem key={c.id} value={c.name}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Button variant="contained" color="primary" onClick={handleAddInteraction}>
        Add Interaction
      </Button>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recorded Interactions:
        </Typography>
        {interactions.length === 0 ? (
          <Typography>No interactions yet.</Typography>
        ) : (
          interactions.map((i) => (
            <Typography key={i.id}>
              {i.student} → {i.company}
            </Typography>
          ))
        )}
      </Box>
    </Container>
  );
}
