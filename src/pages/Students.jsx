import { useEffect, useState } from "react";
import { getStudents, } from "../utils/storage";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const handleRemove = (id) => {
    const updated = removeStudentFromStorage(id);
    setStudents(updated);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student List
      </Typography>

      {students.length === 0 ? (
        <Typography>No students found.</Typography>
      ) : (
        students.map((student) => (
          <Card key={student.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{student.name}</Typography>
              <Typography color="text.secondary">
                {student.branch} — {student.year}
              </Typography>
              <Button
                variant="outlined"
                color="error"
                size="small"
                sx={{ mt: 1 }}
                onClick={() => handleRemove(student.id)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}
