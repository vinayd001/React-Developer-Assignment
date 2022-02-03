import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext } from "react";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

//components
import EnterDetails from "./EnterDetails";
import EditDetails from "./EditDetails";

const BasicTabs = (props) => {
  const [value, setValue] = React.useState(0);
  // const store = useContext(props.store);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "60%", margin: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Enter Details" />
          <Tab label="Edit Details" />
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <EnterDetails value={value} index={0} />
      <EditDetails value={value} index={1} />
    </Box>
  );
};

export default BasicTabs;

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }
