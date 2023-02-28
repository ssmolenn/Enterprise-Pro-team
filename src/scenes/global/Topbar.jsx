import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'; 
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SearchIcon from "@mui/icons-material/Search"; 

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/*Search Bar*/} 
        <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        >
        <InputBase sx={{ml: 2, flex: 1 }} placeholder="Search"/>
        <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon/>
        </IconButton>
        </Box>

        {/*icons*/}
        <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
            ) : (
                <LightModeOutlinedIcon/>
                )}
        </IconButton>
        <IconButton>
            <BarChartOutlinedIcon/>  
        </IconButton>
        <IconButton>
            <SplitscreenOutlinedIcon />
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon/>  
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
            <LoginOutlinedIcon />
        </IconButton>
        


        </Box>
        
    </Box>
    );
};
export default TopBar;