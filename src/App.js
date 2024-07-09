import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddRestaurantPage from './pages/AddRestaurantPage';
import EditRestaurantPage from './pages/EditRestaurantPage';
import './styles.css';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const handleAddRestaurant = (restaurant) => {
    const newRestaurant = { ...restaurant, id: `${Date.now()}` };
    setRestaurants([...restaurants, newRestaurant]);
  };

  const handleUpdateRestaurant = (id, updatedRestaurant) => {
    setRestaurants(restaurants.map(r => (r.id === id ? { ...r, ...updatedRestaurant } : r)));
  };

  const handleDeleteRestaurant = (id) => {
    setRestaurants(restaurants.filter(r => r.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage restaurants={restaurants} onDelete={handleDeleteRestaurant} />} />
        <Route path="/add" element={<AddRestaurantPage onAdd={handleAddRestaurant} />} />
        <Route path="/edit/:id" element={<EditRestaurantPage restaurants={restaurants} onUpdate={handleUpdateRestaurant} />} />
      </Routes>
    </Router>
  );
}

export default App;
