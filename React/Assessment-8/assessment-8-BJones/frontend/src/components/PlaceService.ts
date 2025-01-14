
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Place {
  _id?: string;
  name: string;
  firstTime: boolean;
}

const placeList: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/places')
      .then((res) => setPlaces(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deletePlace = (id: string) => {
    axios.delete(`http://localhost:3000/api/places/${id}`)
      .then(() => setPlaces(places.filter((place) => place._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <ul>
      {places.map((place) => (
        <li key={place._id}>
          {place.name} {place.alignment} 
          <button onClick={() => deletePlace(place._id!)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default placeList;







