import React, { useState } from 'react';

const RestaurantForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [location, setLocation] = useState(initialData.location || '');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!description) newErrors.description = 'Description is required';
    if (!location) newErrors.location = 'Location is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit({ name, description, location });
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.general && <p className="error">{errors.general}</p>}
      <div className="form-group">
        <label>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) {
              setErrors(prevErrors => ({ ...prevErrors, name: '' }));
            }
          }} 
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => {
            setDescription(e.target.value);
            if (errors.description) {
              setErrors(prevErrors => ({ ...prevErrors, description: '' }));
            }
          }} 
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>
      <div className="form-group">
        <label>Location</label>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => {
            setLocation(e.target.value);
            if (errors.location) {
              setErrors(prevErrors => ({ ...prevErrors, location: '' }));
            }
          }} 
        />
        {errors.location && <p className="error">{errors.location}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RestaurantForm;
