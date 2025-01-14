import React from 'react';
import './styles/ResourceLine.css';

const ResourceLine = ({ resource, amount }) => (
  <div className="resource-line">
    <span>{resource}</span>: <span>{amount}</span>
  </div>
);

export default ResourceLine;