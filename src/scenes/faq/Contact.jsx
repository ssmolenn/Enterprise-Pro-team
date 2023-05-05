import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

import { tokens } from "../../theme";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Informations" subtitle="Informations about the company" />
      <h4 style={{ fontSize: "30px" }}>
        {" "}
        This app was created to help workers control temperatures in the oven.
      </h4>
      <p style={{ fontSize: "25px" }}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Box>
  );
};

export default Contact;
