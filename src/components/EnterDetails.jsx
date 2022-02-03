import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "15rem",
};

const EnterDetails = (props) => {
  const { value, index, ...other } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch({
      type: "SET_DETAILS",
      payload: {
        name: e.target.name.value,
        age: e.target.age.value,
      },
    });
  };

  return (
    <>
      {value === index && (
        <Box
          sx={{ p: 3 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit} style={form}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
            <label htmlFor="age">Age:</label>
            <input id="age" type="number" />
            <button type="submit">Submit</button>
          </form>
        </Box>
      )}
    </>
  );
};

EnterDetails.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default connect(null)(EnterDetails);
