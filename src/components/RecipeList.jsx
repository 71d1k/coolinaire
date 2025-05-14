import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import '../styles/RecipeList.css';

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const recipes = [
    { title: 'Паста Карбонара', image: 'src/assets/pasta-carbonara.jpg', link: 'pasta-carbonara' },
    { title: 'Тайский том-ям', image: 'src/assets/thai-tom-yam.jpg', link: 'thai-tom-yam' },
    { title: 'Греческий салат', image: 'src/assets/greek-salad.jpg', link: 'greek-salad' },
    { title: 'Чили кон карне', image: 'src/assets/chili-con-carne.jpg', link: 'chili-con-carne' },
    { title: 'Рататуй', image: 'src/assets/ratatouille.jpg', link: 'ratatouille' },
    { title: 'Бешбармак', image: 'src/assets/beshbarmak.jpg', link: 'beshbarmak' },
    { title: 'Тирамису', image: 'src/assets/tiramisu.jpg', link: 'tiramisu' },
    { title: 'Окрошка', image: 'src/assets/okroshka.jpg', link: 'okroshka' },
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipe-list-container">
      <h1 className="recipe-list-title">Рецепты</h1>
      <input
        type="text"
        placeholder="Поиск рецептов"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="recipe-search-input"
      />
      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <Link to={`/recipe/${recipe.link}`} key={recipe.link} className="recipe-card-link">
            <RecipeCard title={recipe.title} image={recipe.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
