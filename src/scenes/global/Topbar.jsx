import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
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
                    justifyContent="space-between"
                    alignItems="center"
                    ml="25px"
                >
                <Typography variant="h3" color={colors.grey[100]}>
                    Rakusens
                </Typography>

                </Box>
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                >
                <InputBase sx={{ml: 2, flex: 1 }} placeholder="Search here..."/>
                <IconButton type="button" sx={{ p: 2 }}>
                    <SearchIcon/>
                </IconButton>
                </Box>


        
              
 

                <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>  
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>

        


        </Box>
        
    </Box>
    );
};
export default TopBar;