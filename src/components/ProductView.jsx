// src/components/ProductView.jsx
import React, { useState, useEffect } from 'react';
import { fetchBreedDetails } from '../api';

const ProductView = ({ breedId, onBack }) => {
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBreedDetails = async () => {
      try {
        const data = await fetchBreedDetails(breedId);
        setBreed(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getBreedDetails();
  }, [breedId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <img src={breed.image.url} alt={breed.name} />
      <h1>{breed.name}</h1>
      <p>Breed Group: {breed.breed_group}</p>
      <p>Bred For: {breed.bred_for}</p>
      <p>Life Span: {breed.life_span}</p>
      <p>Origin: {breed.origin}</p>
    </div>
  );
};

export default ProductView;
