import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IntegrationPageEditView from "./IntegrationPageEditView";
import IntegrationPageCreate from "./IntegrationPageCreate";

const IntegrationPage = ({ formik }) => {
  const { values } = formik;
  const map = values.map;

  const initialSelectedValue = map && map.length > 0 ? "true" : "false";
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue);
  const [isSelectDisabled, setIsSelectDisabled] = useState(!map);
  const [showEditViewTable, setShowEditViewTable] = useState(true); // Initial state for showing the edit/view table
  const [showCreateTable, setShowCreateTable] = useState(
    initialSelectedValue === "true"
  );

  useEffect(() => {
    setSelectedValue(initialSelectedValue);
    setIsSelectDisabled(!map);
    setShowCreateTable(initialSelectedValue === "true");
  }, [map, initialSelectedValue]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setShowCreateTable(newValue === "true"); // Update showCreateTable based on selected value
    setShowEditViewTable(newValue === "true"); // Set showEditViewTable based on selected value
  };

  // Check for null or undefined map
  if (map === null || map === undefined) {
    return (
      <div className="content-div">
        <FormControl fullWidth disabled>
          <InputLabel id="demo-simple-select-label">Select Value</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value="false" // Set default value to 'false'
            label="Select Value"
            onChange={handleChange}
            disabled
          >
            <MenuItem value="true">Enabled</MenuItem>
            <MenuItem value="false">Disabled</MenuItem>
          </Select>
        </FormControl>
        <p>Map is null or undefined.</p>
      </div>
    );
  }

  return (
    <div className="content-div">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Value</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={selectedValue}
          label="Select Value"
          onChange={handleChange}
          disabled={!map}
        >
          <MenuItem value="true">Enabled</MenuItem>
          <MenuItem value="false">Disabled</MenuItem>
        </Select>
      </FormControl>

      {values.action === "edit" ? (
        <IntegrationPageEditView
          formik={formik}
          showTable={showEditViewTable}
        />
      ) : (
        showCreateTable && (
          <IntegrationPageCreate formik={formik} showTable={true} />
        )
      )}
    </div>
  );
};

IntegrationPage.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default IntegrationPage;
