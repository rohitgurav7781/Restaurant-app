import React from 'react';

const RestaurantItem = ({ restaurant }) => (
  <div>
    <h2>{restaurant.name}</h2>
    <p>{restaurant.description}</p>
    <p>{restaurant.location}</p>
  </div>
);

export default RestaurantItem;
