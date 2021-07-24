import React, { useState, useEffect } from 'react';
import Recipe from '../Recipe';
import Card from '../Card';

const FavoritesList = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://healtheats-c04bb-default-rtdb.firebaseio.com/favorites.json'
        )
        .then((response) => {
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
            setIsLoading(false);
            setFavorites(favorites);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <Card favorites={favorites} />
    )
}

export default FavoritesList;
