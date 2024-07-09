import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantForm from '../components/RestaurantForm';

const EditRestaurantPage = ({ restaurants, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const restaurant = restaurants.find(r => r.id === id);
    if (restaurant) {
      setInitialData(restaurant);
    }
  }, [id, restaurants]);

  const handleSubmit = (data) => {
    onUpdate(id, data);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Edit Restaurant</h1>
      {initialData && <RestaurantForm onSubmit={handleSubmit} initialData={initialData} />}
    </div>
  );
};

export default EditRestaurantPage;
