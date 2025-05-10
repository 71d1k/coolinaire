import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const recipes = [
  // рецепты
    { title: 'Паста Карбонара ', image: 'src/assets/pasta-carbonara.jpg', link: '/pasta-carbonara' },
    { title: 'Тайский том-ям', image: 'src/assets/thai-tom-yam.jpg', link: '/thai-tom-yam' },
    { title: 'Греческий салат', image: 'src/assets/greek-salad.jpg', link: '/greek-salad' },
    { title: 'Чили кон карне', image: 'src/assets/chili-con-carne.jpg', link: '/chili-con-carne' },
    { title: 'Рататуй', image: 'src/assets/ratatouille.jpg', link: '/ratatouille' },
    { title: 'Бешбармак', image: 'src/assets/beshbarmak.jpg', link: '/beshbarmak' },
    { title: 'Тирамису', image: 'src/assets/tiramisu.jpg', link: '/tiramisu' },
    { title: 'Окрошка', image: 'src/assets/okroshka.jpg', link: '/okroshka' },
  ];

  return (
    <div>
      <h2>Recipe Index</h2>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
