import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Chart from "../../components/Chart";
import { tokens } from "../../theme";

const Charts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
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
