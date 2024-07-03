import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IntegrationPageEditView from "./IntegrationPageEditView";
import IntegrationPageCreate from "./IntegrationPageCreate";

const IntegrationPage = ({ formik }) => {
  const {
    values: { map, action },
  } = formik;

  const getInitialSelectedValue = () =>
    map && map.length > 0 ? "true" : "false";

  const [selectedValue, setSelectedValue] = useState(getInitialSelectedValue);
  const [showTable, setShowTable] = useState(selectedValue === "true");

  useEffect(() => {
    const initialSelectedValue = getInitialSelectedValue();
    setSelectedValue(initialSelectedValue);
    setShowTable(initialSelectedValue === "true");
  }, [map]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    setShowTable(newValue === "true");
  };

  const isSelectDisabled = !map;

  if (!map) {
    return (
      <div>
        <FormControl fullWidth disabled>
          <InputLabel id="demo-simple-select-label">Select Value</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value="false"
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
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Value</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={selectedValue}
          label="Select Value"
          onChange={handleChange}
          disabled={isSelectDisabled}
        >
          <MenuItem value="true">Enabled</MenuItem>
          <MenuItem value="false">Disabled</MenuItem>
        </Select>
      </FormControl>

      {action === "edit" ? (
        <IntegrationPageEditView formik={formik} showTable={showTable} />
      ) : (
        showTable && <IntegrationPageCreate formik={formik} showTable={true} />
      )}
    </div>
  );
};

IntegrationPage.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default IntegrationPage;
