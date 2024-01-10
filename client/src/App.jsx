import "./App.css";

import Header from "./beforeAuth/navigation/header/Header";
import {HomePage, Resolution, Ordinance} from './beforeAuth/components'
import {RegisterPage, LoginPage} from './beforeAuth/authPage'
import Footer from './beforeAuth/navigation/footer/Footer'


import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="Header">
            <Header/>
          </div>
          <div className="Pages">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/resolution" element={<Resolution/>} />
              <Route path="/ordinance" element={<Ordinance />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <div className="Footer">
              <Footer/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
