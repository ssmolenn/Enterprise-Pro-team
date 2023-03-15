import useState from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import USER from "../../pic/USER.jpg"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SsidChartIcon from '@mui/icons-material/SsidChart'; 



const Sidebar= () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    //const [isCollapsed, setIsCollapsed] = useState(false);
    //const [selected, setSelected] = useState("Dashboard");
    

    return (
        <Box 
        sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hoover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",  
            },
        }}
        >

            <Menu iconShape="square">
            
              

            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center" margin= "5em">
                <img
                  alt=""
                  width="100px"
                  height="100px"
                  src={`../pic/USER.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                  
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Username
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  username
                </Typography>
              </Box>
            </Box>
            <Box display="flex" flexDirection={'column'} >
                <IconButton sx={{ p: 6 }}>
                  <Link to="/index">
                    <HomeOutlinedIcon style={{fontSize: 60}}/>
                    </Link>
                </IconButton>
                <IconButton sx={{ p: 6 }}>
                    <SsidChartIcon style={{fontSize: 60}}/>
                </IconButton>
                
                <IconButton sx={{ p: 6 }}>
                <Link to="/Contact">
                    <HelpOutlineOutlinedIcon style={{fontSize: 60}}/>
                    </Link>
                </IconButton>
                <IconButton sx={{ p: 6 }} >
                    <LoginOutlinedIcon style={{fontSize: 60}} />
                </IconButton>
                


        </Box>
          </Menu>
        </Box>
    );
};

export default Sidebar;