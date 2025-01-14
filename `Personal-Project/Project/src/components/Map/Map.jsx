import React from 'react';
import Tile from './Tile';
import './styles/Map.css';

const Map = ({ improvements, addImprovement, updateResources, resources }) => {
  const gridSize = 5;

  
  return (
    <div className="fullPage"> 
      <h1>Village Sim</h1>
      <h2> Click a cell to add improvements...</h2>
      <div className="map"> 
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const improvement = improvements.find((imp) => imp.index === index);
          return (
            <Tile
              key={index}
              index={index}
              improvement={improvement}
              addImprovement={addImprovement}
              updateResources={updateResources}
              resources={resources}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Map;
