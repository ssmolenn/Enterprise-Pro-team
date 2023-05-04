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
              </button>
            </Box>
            <Box textAlign="center" borderRadius="5px" margin="4em">
              <button type="submit" className="btn btn-warning">
                <a class="nav-link" href="/EditUser">
                  Edit
                </a>
              </button>
            </Box>
            <Box textAlign="center" borderRadius="5px" margin="4em">
              <button type="submit" className="btn btn-danger">
                <a class="nav-link" href="/ListUser">
                  List
                </a>
              </button>
            </Box>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
