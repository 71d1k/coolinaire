import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/RecipePage.css';
import recipeData from '../assets/recipe-data.json';
import recipeImage1 from '../assets/pasta-carbonara.jpg';
import recipeImage2 from '../assets/thai-tom-yam.jpg';
import recipeImage3 from '../assets/greek-salad.jpg';
import recipeImage4 from '../assets/chili-con-carne.jpg';
import recipeImage5 from '../assets/ratatouille.jpg';
import recipeImage6 from '../assets/beshbarmak.jpg';
import recipeImage7 from '../assets/tiramisu.jpg';
import recipeImage8 from '../assets/okroshka.jpg';

const RecipePage = () => {
  const { recipeLink } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const findRecipe = () => {
      const foundRecipe = recipeData.find((item) => item.link === recipeLink);
      setRecipe(foundRecipe);
    };
    findRecipe();
  }, [recipeLink]);

  if (!recipe) {
    return (
      <div className="recipe-page-container">
        <h1>Error 404</h1>
        <p>Рецепт не найден</p>
      </div>
    );
  }

  let recipeImage;
  switch (recipe.image) {
    case 'pasta-carbonara.jpg':
      recipeImage = recipeImage1;
      break;
    case 'thai-tom-yam.jpg':
      recipeImage = recipeImage2;
      break;
    case 'greek-salad.jpg':
      recipeImage = recipeImage3;
      break;
    case 'chili-con-carne.jpg':
      recipeImage = recipeImage4;
      break;
    case 'ratatouille.jpg':
      recipeImage = recipeImage5;
      break;
    case 'beshbarmak.jpg':
      recipeImage = recipeImage6;
      break;
    case 'tiramisu.jpg':
      recipeImage = recipeImage7;
      break;
    case 'okroshka.jpg':
      recipeImage = recipeImage8;
      break;
    default:
      recipeImage = null;
  }

  return (
    <div className="recipe-page-container">
      <div className="recipe-image-container">
        {recipeImage && <img src={recipeImage} alt={recipe.title} />}
        <div className="recipe-info">
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
        </div>
      </div>
      <div className="recipe-details">
        <h2>Ингредиенты:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Инструкции:</h2>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;
