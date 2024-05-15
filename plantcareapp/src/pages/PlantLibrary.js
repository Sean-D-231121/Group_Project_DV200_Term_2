import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MySideNav from '../Components/NavBar';

const PlantLibrary = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.trefle.io/v1/plants?token=o_b_s8Km0_KxtuCGsrwZAvXvAty4lM3Ps0ywNY2qzWs&filter[limit]=20'
        );
        setPlants(response.data.data);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <MySideNav />
      {plants.map((plant) => (
        <div key={plant.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
          <h2>{plant.common_name}</h2>
          <p>{plant.scientific_name}</p>
          <img src={plant.image_url} alt={plant.common_name} style={{ maxWidth: '100%' }} />
        </div>
      ))}
    </div>
  );
};

export default PlantLibrary;