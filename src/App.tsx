// src/App.tsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  makeStyles,
  Container,
} from "@material-ui/core";
import { useCountries } from "./hooks/useCountries";

// Define styles using makeStyles
const useStyles = makeStyles({
  filterSection: {
    marginBottom: "20px",
  },
  table: {
    minWidth: 650,
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  const [filter, setFilter] = useState<string>("");
  const countries = useCountries(filter);

  console.log(countries);

  return (
    <Box sx={{ marginTop: "24px" }}>
      <Container>
        <div className={classes.filterSection}>
          <TextField
            label="Country Name"
            variant="outlined"
            fullWidth
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="Country Data Table">
            <TableHead>
              <TableRow>
                <TableCell>ISO Code</TableCell>
                <TableCell>Flag</TableCell>
                <TableCell>Country Name</TableCell>
                <TableCell>Official Name</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Population</TableCell>
                <TableCell>Timezones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map((country) => (
                <TableRow key={country.cca3}>
                  <TableCell>{country.cca3}</TableCell>
                  <TableCell>
                    <img
                      src={country.flags.png}
                      alt={country.name.common}
                      width="80px"
                    />
                  </TableCell>
                  <TableCell>{country.name.common}</TableCell>
                  <TableCell>{country.name.official}</TableCell>
                  <TableCell>{country.region}</TableCell>
                  <TableCell>{country.population}</TableCell>
                  <TableCell>{country.timezones.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default App;
