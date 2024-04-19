import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Designs from "./pages/Designs/Designs";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import projects from "./data/DesignProjects.json";

function App() {
  const [activeDesign, setActiveDesign] = useState(projects[3]);
  function updateActiveDesign(clickId) {
    const newActiveDesign = projects[clickId];
    setActiveDesign(newActiveDesign);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                projects={projects}
                // activeDesign={activeDesign}
                updateActiveDesign={updateActiveDesign}
              />
            }
          />
          <Route
            path="/designs"
            element={<Navigate to="/designs/0" replace />}
          />
          <Route
            path="/designs/:id"
            element={
              <Designs
                projects={projects}
                activeDesign={activeDesign}
                updateActiveDesign={updateActiveDesign}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
