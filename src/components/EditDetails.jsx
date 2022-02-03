import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import { connect, useSelector } from "react-redux";

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "15rem",
};

const EditDetails = (props) => {
  // const xstate = useSelector((state) => state);
  // console.log("xstate", xstate);
  const details = useSelector((state) => state.details);
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [disable, setDisable] = React.useState(true);

  React.useEffect(() => {
    setName(details.name);
    setAge(details.age);
  }, [details]);

  // console.log(details.name, details.age);

  const { value, index, ...other } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch({
      type: "EDIT_DETAILS",
      payload: {
        name: e.target.name.value,
        age: e.target.age.value,
      },
    });
    setDisable(true);
  };

  return (
    <>
      {value === index && (
        <>
          <div>
            <EditIcon
              onClick={() => setDisable(!disable)}
              style={{ cursor: "pointer", float: "right", marginTop: "1rem" }}
            />
          </div>
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
              <input
                disabled={disable}
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="age">Age:</label>
              <input
                disabled={disable}
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              {!disable ? (
                <button disabled={disable} type="submit">
                  Save
                </button>
              ) : null}
            </form>
          </Box>
        </>
      )}
    </>
  );
};

// EnterDetails.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

export default connect(null)(EditDetails);
