import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title} />
      <a href={recipe.link}>View Recipe</a>
    </div>
  );
};

export default RecipeCard;
