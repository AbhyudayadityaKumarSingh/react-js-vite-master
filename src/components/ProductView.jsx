// src/components/ProductView.jsx
import React, { useState, useEffect } from 'react';
import { fetchBreedDetails } from '../api';

const ProductView = ({ breed, onBack }) => {
  const [breedDetails, setBreedDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBreedDetails = async () => {
      try {
        const data = await fetchBreedDetails(breed.id);
        setBreedDetails(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getBreedDetails();
  }, [breed.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <img src={breedDetails.image?.url} alt={breedDetails.name} />
      <h1>{breedDetails.name}</h1>
      <p>Breed Group: {breedDetails.breed_group}</p>
      <p>Bred For: {breedDetails.bred_for}</p>
      <p>Life Span: {breedDetails.life_span}</p>
      <p>Origin: {breedDetails.origin}</p>
    </div>
  );
};

export default ProductView;
