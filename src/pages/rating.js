import logo from '../icon-star.svg';
import React, { useState } from "react";
import { Link, Routes, Route, useNavigate, useHistory } from 'react-router-dom';

import '../App.css';

function Rating() {

    const navigate = useNavigate();

    const [rating, setRating] = useState({
        data: [],
    });
    const [newRating, setNewRating] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = rating.data;
        newData.push(newRating);
        setRating({ data: newData });
        console.log(e);
        setNewRating("");
        navigate("/thankYouPage", e);

    };

    return (
        <div className="App">
            <header className="App-header">
                <div class="container">
                    <img src={logo} alt="Star Logo" class="star-logo" />
                    <h2 class="container-header">How did we do?</h2>
                    <div class="container-content">
                        <p>Please let us know how we did with your support request. All feedback is appreciated
                            to help us improve our offering!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="container-rating">
                            <li value="1"><input type="radio" class="rating" id="rating-1" name="rating" value={newRating} onChange={(e) => setNewRating(e.target.value)} />
                                <label for="rating-1">1</label></li>
                            <li value="2"><input type="radio" class="rating" id="rating-2" name="rating" value={newRating} onChange={(e) => setNewRating(e.target.value)} />
                                <label for="rating-2">2</label></li>
                            <li value="3"><input type="radio" class="rating" id="rating-3" name="rating" value={newRating} onChange={(e) => setNewRating(e.target.value)} />
                                <label for="rating-3">3</label></li>
                            <li value="4"><input type="radio" class="rating" id="rating-4" name="rating" value={newRating} onChange={(e) => setNewRating(e.target.value)} />
                                <label for="rating-4">4</label></li>
                            <li value="5"><input type="radio" class="rating" id="rating-5" name="rating" value={newRating} onChange={(e) => setNewRating(e.target.value)} />
                                <label for="rating-5">5</label></li>
                        </div>
                        <div class="container-submit">
                            <input type="submit" class="submit-button" value="Submit" />
                        </div>

                    </form>


                </div>
            </header>
        </div>
    );
}

export default Rating;
