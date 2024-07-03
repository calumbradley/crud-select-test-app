import React from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const IntegrationPageCreate = ({ formik, showTable }) => {
  const { values } = formik;

  return (
    <div>
      <Typography sx={{ mt: 3 }}>Create Page</Typography>
      {showTable && (
        <TableContainer component={Paper} sx={{ mb: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Source Sheet</TableCell>
                <TableCell>Target</TableCell>
                <TableCell>Enforce Entitlement</TableCell>
                <TableCell>Custom Entitlement</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map.map((link, index) => (
                <TableRow key={index}>
                  <TableCell>{link.sourceSheet}</TableCell>
                  <TableCell>{link.target}</TableCell>
                  <TableCell>{link.enforceEntitlement.toString()}</TableCell>
                  <TableCell>{link.customEntitlement}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

IntegrationPageCreate.propTypes = {
  formik: PropTypes.object.isRequired,
  showTable: PropTypes.bool.isRequired,
};

export default IntegrationPageCreate;
