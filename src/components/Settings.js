import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import Header from "./Header";
function Settings() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="app">
      <main className="content">
        <div>
          <Box m="20px">
            <Header
              title="User settings"
              subtitle="More informations about users"
            />
            <h4 style={{ fontSize: "30px" }}>
              {" "}
<<<<<<< HEAD
              This page allow admin to manage all users from that panel - adding
              new users, editing their data or removing them.
            </h4>
          </Box>
          <div>
            <Box textAlign="center" borderRadius="5px" margin="4em">
              <button type="submit" className="btn btn-success">
                <a class="nav-link" href="/CreateUser">
                  Add New User
                </a>
=======
              This page allow admin to manage all users from that panel - adding new users, editing their data or removing them.
            </h4>
            
          </Box>
          <div>
            <Box textAlign="center" borderRadius="5px" margin="4em">
              <button type="submit" className="btn btn-success" >
              <a class="nav-link" href="/CreateUser">Add New User</a>
>>>>>>> 0c7502f (Connecting Register/Login page with database)
              </button>
            </Box>
            <Box textAlign="center" borderRadius="5px" margin="4em">
              <button type="submit" className="btn btn-warning">
<<<<<<< HEAD
                <a class="nav-link" href="/EditUser">
                  Edit
                </a>
=======
              <a class="nav-link" href="/EditUser">Edit</a>
>>>>>>> 0c7502f (Connecting Register/Login page with database)
              </button>
            </Box>
            <Box textAlign="center" borderRadius="5px" margin="4em">
              <button type="submit" className="btn btn-danger">
<<<<<<< HEAD
                <a class="nav-link" href="/ListUser">
                  List
                </a>
=======
              <a class="nav-link" href="/ListUser">List</a>
>>>>>>> 0c7502f (Connecting Register/Login page with database)
              </button>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
