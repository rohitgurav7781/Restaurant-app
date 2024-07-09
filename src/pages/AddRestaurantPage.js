import React from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantForm from '../components/RestaurantForm';

const AddRestaurantPage = ({ onAdd }) => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    onAdd(data);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Add New Restaurant</h1>
      <RestaurantForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddRestaurantPage;
