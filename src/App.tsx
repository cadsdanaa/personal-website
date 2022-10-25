import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {About} from "./about/About";
import {Navigation} from "./navigation/Navigation";

function App() {
  return (
    <div className="App">
      <About/>
      <Navigation/>
    </div>
  );
}

export default App;
