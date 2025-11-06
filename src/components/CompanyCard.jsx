// src/components/CompanyCard.jsx
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function CompanyCard({ company }) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        padding: 1,
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Role: {company.role}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Package: {company.package} LPA
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {company.location}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 1 }}
          onClick={() => alert(`More details about ${company.name}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
