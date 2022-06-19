import thanksLogo from '../illustration-thank-you.svg';
import React, { useState } from "react";
import { Link, Routes, Route, useNavigate, useHistory } from 'react-router-dom';

import '../App.css';

function Submited() {



    return (
        <div className="App">
            <header className="App-header">
                <div class="container-center">
                    <img src={thanksLogo} alt="thanks Logo" class="thanks-logo" />
                    <h2 class="container-header-center">Thank you!</h2>
                    <div class="container-content">
                        <p>We appreciate you taking the time to give a rating.
                            if you ever need more support, don't hesitate to get in touch!</p>
                    </div>

                </div>
            </header>
        </div>
    );
}

export default Submited;