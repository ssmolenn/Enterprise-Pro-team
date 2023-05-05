
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, BrowserRouter, Navigate  } from "react-router-dom";
import TopBar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/index";
import Settings from "./components/Settings";
import Sidebar from "./scenes/global/Sidebar";
import Charts from "./scenes/chart/Charts";
import Contact from "./scenes/faq/Contact";
import Index from "./scenes/dashboard/index";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListUser from "./components/ListUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/Home.js";
import ResetPassword from "./components/reset";
import Profile from "./components/profile";
import Logout from "./components/logout";
import AccountConfirm from "./components/confirm";
import Login from "./components/login";
import Register from "./components/register";
import React from "react";


function App() {
  const [theme, colorMode] = useMode();

  

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
              <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/Index" element={<Index />} />
                <Route path="/Charts" element={<Charts />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/CreateUser" element={<CreateUser />} />
                <Route path="/EditUser" element={<EditUser />} />
                <Route path="/ListUser" element={<ListUser />} />
                <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm" element={<AccountConfirm />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
