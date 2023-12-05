import React from "react";
import "./home.css";
import carabao from "../../assets/carabao.png";
import logo from "../../assets/logo.png";

import Button from "react-bootstrap/Button";

// routing imports
import {Link} from "react-router-dom";

const Home = () => {
  const pageStyle = {
    backgroundImage: "linear-gradient(135deg, #D0E7D2 0%, #D0E7D2 100%)",
    minHeight: "90vh",
  };

  return (
    <div style={pageStyle}>
      <div className="content">
        <img src={carabao} />
        <div className="hero-container">
          <h1>Naic Resolutions and Ordinances</h1>
          <Button as={Link} to="/about" variant="light" className="button">
            About us!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
