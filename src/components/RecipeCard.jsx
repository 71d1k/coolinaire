import React from 'react';
import '../styles/RecipeCard.css';

const RecipeCard = ({ title, image }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={image} alt={title} />
      </div>
      <h3 className="recipe-title">{title}</h3>
    </div>
  );
};

export default RecipeCard;
