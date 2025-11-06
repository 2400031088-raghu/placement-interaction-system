// src/pages/Companies.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import CompanyCard from "../components/CompanyCard";
import Loader from "../components/Loader";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mockapi.io/api/v1/companies") // Example API
      .then((res) => setCompanies(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <Container sx={{ paddingY: 3 }}>
      <Typography variant="h4" gutterBottom>
        Participating Companies
      </Typography>

      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </Container>
  );
}
