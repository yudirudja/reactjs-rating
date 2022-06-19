import logo from './icon-star.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Link, useNavigate, useHistory} from 'react-router-dom';

import './App.css';
import Rating from './pages/rating';
import Submited from './pages/thankYouPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Rating />} />
        <Route exact path="/thankYouPage" element={<Submited />} />
      </Routes>
    </Router>
  );
}

export default App;
