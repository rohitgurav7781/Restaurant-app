import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants, onEdit,onDelete }) => {
  return (
    <div>
      <h1>Restaurants</h1>
      <Link to="/add" className="add-link">Add New Restaurant</Link>
      <ul className="restaurant-list">
        {restaurants.map(restaurant => (
          <li key={restaurant.id} className="restaurant-item">
            <Link to={`/edit/${restaurant.id}`} className="restaurant-link">{restaurant.name}</Link>
            <button onClick={() => onDelete(restaurant.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
