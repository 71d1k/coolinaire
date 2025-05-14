import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import ContactForm from './components/ContactForm';
import RecipePage from './components/RecipePage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/recipe/:recipeLink" element={<RecipePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
