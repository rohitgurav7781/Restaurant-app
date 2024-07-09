import React from 'react';
import RestaurantList from '../components/RestaurantList';

const HomePage = ({ restaurants, onDelete ,onEdit}) => (
  <div className="container">
    <RestaurantList restaurants={restaurants} onDelete={onDelete} />
  </div>
);

export default HomePage;
