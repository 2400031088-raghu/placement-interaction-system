import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StudentCard({ student = {} }) {
  return (
    <Card sx={{ margin: 2, padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" color="primary">
          {student.name || "Unknown Student"}
        </Typography>
        <Typography variant="body2">ID: {student.id || "N/A"}</Typography>
        <Typography variant="body2">Email: {student.email || "N/A"}</Typography>
        <Box mt={1}>
          <Typography variant="body2">
            Department: {student.department || "N/A"}
          </Typography>
          <Typography variant="body2">
            Year: {student.year || "N/A"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
