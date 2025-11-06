import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5">About This Project</Typography>
      <Typography sx={{ mt: 2 }}>
        The Placement Interaction System allows students to interact with
        companies, store student details locally, and display company data fetched
        via API. Built using React, Hooks, Context API, and Material UI.
      </Typography>
    </Container>
  );
}
