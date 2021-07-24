import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import axios from "axios";

const Recipe = ({ recipe, userid }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  const saveRecipe = () => {
    axios.post("/api/user/saverecipe"+userid,{
      title: label,
      link: url,
    }) 
    .then(saveRecord  => {
      console.log(saveRecord)
    })
  }

  // function addFavoriteHandler(recipeData) {
  //   fetch(
  //     'https://healtheats-c04bb-default-rtdb.firebaseio.com/favorites.json',
  //     {
  //       method: 'POST',
  //       body: JSON.stringify(recipeData),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   );
  // }

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Link
      </a>
      <button onClick={saveRecipe}>Save to favorites</button>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;