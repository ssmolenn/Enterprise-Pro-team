import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Chart from "./components/Chart";
import LoginPage from "./components/LoginPage";
import Settings from "./components/Settings";
import Contact from "./components/Contact";

function App() {
  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />    
                <div className="app">
                  <main className="content">
                    <TopBar />
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                    </Routes>
                  </main>
                </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
  );
}

export default App;
