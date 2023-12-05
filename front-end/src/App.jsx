import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";

// Navigation Components
import {Header} from "./navigation";

// Pages Components
import {Home, About, Contacts, Resolutions, Ordinances} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
        </div>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/resolutions" element={<Resolutions />} />
            <Route path="/ordinances" element={<Ordinances />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
