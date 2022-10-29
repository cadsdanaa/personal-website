import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Navigation} from "./navigation/Navigation";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="NavContainer">
          <Navigation/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
