import React, { useState, useEffect } from 'react';
import Wrapper from '../../Components/Wrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FavoritesList from '../../Components/FavoritesList';

const Dashboard = () => {
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    useEffect(() => {
        fetch('https://healtheats-c04bb-default-rtdb.firebaseio.com/favorites.json')
        .then(response => {
            return response.json();
        })
        .then((data) => {
            const favorites = [];

            for (const key in data) {
                const favorite = {
                    id: key,
                    ...data[key]
                };

                favorites.push(favorite);
            }

            setFavoriteRecipes(favorites);
        })
    }, [])

    return (
        <div>
            <Wrapper>
                <div className="favoriteRecipes">
                    <h1>My Favorite Recipes</h1>
                    <FavoritesList favorites={favoriteRecipes} />
                </div>
            </Wrapper>
        </div>
    )
}

export default Dashboard;