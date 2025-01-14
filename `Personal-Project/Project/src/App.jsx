import React, { useState } from 'react';
import Map from './components/Map/Map';
import ResourcesView from './components/ResourcesView/ResourcesView';
import './styles/App.css';

const initialResources = {
  lumber: 5,
  grain: 5,
  water: 5,
  sheep: 1,
  people: 0,
};

const App = () => {
  const [resources, setResources] = useState(initialResources);
  const [improvements, setImprovements] = useState([]);

  const addImprovement = (improvement) => {
    setImprovements([...improvements, improvement]);
  };

  const updateResources = (resourceChanges) => {
    setResources((prev) =>
      Object.fromEntries(
        Object.entries(prev).map(([key, value]) => [
          key,
          value + (resourceChanges[key] || 0),
        ])
      )
    );
  };

  return (
    <div className="app">
      <ResourcesView resources={resources} />
      <Map
        improvements={improvements}
        addImprovement={addImprovement}
        updateResources={updateResources}
        resources={resources}
      />
    </div>
  );
};

export default App;