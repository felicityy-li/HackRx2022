import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {Paper} from "@mui/material";

export default function DummyHardcodedProfile() {
  const personalInfo = {
    name: "John Doe",
    age: "80 years old",
    healthcard: "123 456 789",
    pastVacines: ["Tetanus", "Hepatitis A"],
    eligibleVaccines: ["Shingles", "Pneumococcal"],
  };

  const vaccines = [{id: 1, past: "Tetanus", eligible: "Shingles"}];

  return (
    <div>
      <h2 className="title">{personalInfo.name}</h2>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/256/981/original/cute-grandfather-character-cartoon-icon-illustration-vector.jpg"
            alt=""
            style={{height: '300px'}}
          />
          <div><strong>Age: &nbsp;</strong> {personalInfo.age}</div>
          <div><strong>Healthcard Number: &nbsp;</strong> {personalInfo.healthcard}</div>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Past Vaccines</TableCell>
              <TableCell align="right">Eligible Vaccines</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vaccines.map((vaccine) => (
              <TableRow
                key={vaccine.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {vaccine.name}
                </TableCell>
                <TableCell align="right">{vaccine.past}</TableCell>
                <TableCell align="right">{vaccine.eligible}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
