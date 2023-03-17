import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Charts from "./scenes/chart/Charts";
import LoginPage from "./components/LoginPage";
import Settings from "./components/Settings";
import Contact from "./scenes/faq/Contact";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

function App() {
  const [theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />    
                <div className="app">
                  <Sidebar />
                  <main className="content">
                    <TopBar />
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/Charts" element={<Charts />} />
                      <Route path="/LoginPage" element={<LoginPage/>} />
                      <Route path="/Settings" element={<Settings />} />
                      <Route path="/Contact" element={<Contact />} />
                    </Routes>
                  </main>
                </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
  );
}

export default App;
