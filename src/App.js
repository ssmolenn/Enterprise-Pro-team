import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard/index";
import Settings from "./components/Settings";
import Sidebar from "./scenes/global/Sidebar";
import Charts from "./scenes/chart/Charts";
import LoginPage from "./components/LoginPage";
import Contact from "./scenes/faq/Contact";
import Index from "./scenes/dashboard/index";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListUser from "./components/ListUser";
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
                      <Route path="/Index" element={<Index />} />
                      <Route path="/Charts" element={<Charts />} />
                      <Route path="/LoginPage" element={<LoginPage/>}  />
                      <Route path="/Settings" element={<Settings />} />
                      <Route path="/Contact" element={<Contact />} />
                      <Route path="/CreateUser" element={<CreateUser />}/>
                      <Route path="/EditUser" element={<EditUser />}/>
                      <Route path="/ListUser" element={<ListUser />}/>
                    </Routes>
                  </main>
                </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
  );
}

export default App;
