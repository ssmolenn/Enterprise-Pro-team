import { Box, useTheme } from "@mui/material";
import Chart from "../../components/Chart";
import { tokens } from "../../theme";
import Header from "../../components/Header";
const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box>
      <Header title="Real-time chart" subtitle="Real-time visualization" />
        <h4 style={{ fontSize: "30px"}}> This page is simulating real-time visualization</h4>
        
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

export default Dashboard;