import { Box, useTheme } from "@mui/material";
import Chart from "../../components/Chart";
import { tokens } from "../../theme";
import Header from "../../components/Header";
const Charts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box m="20px">
        <Header title="Charts" subtitle="Charts from dataset" />
        <h4 style={{ fontSize: "30px" }}>
          {" "}
          This page is showing all sensors from the oven.
        </h4>
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="5px"
        margin="4em"
      >
        <Chart />
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="5px"
        margin="4em"
      >
        <Chart />
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="5px"
        margin="4em"
      >
        <Chart />
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="5px"
        margin="4em"
      >
        <Chart />
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="5px"
        margin="4em"
      >
        <Chart />
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="5px"
        margin="4em"
      >
        <Chart />
      </Box>
    </Box>
  );
};

export default Charts;
