import React, { useState } from 'react';
import './styles/AddImprovementDialog.css';
import CloseDialogBox from './CloseDialogButton.jsx';


const AddImprovementDialog = ({ index, addImprovement, resources, closeDialog }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(true);  // Managing dialog visibility state
  const [type, setType] = useState('House');

  const handleAdd = () => {
    // TODO: Calculate cost and check resources
    addImprovement({ index, type, level: 1 });

  };
  
  const handleCloseDialog = () => {
    setIsDialogVisible(true); // Should close the dialog when the button is clicked
    closeDialog(); // Call the closeDialog prop (if needed)
  };


  return (
    <div className="add-improvement-dialog">
      <label>
        Select Improvement:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {/* <img src={lumbermill} alt="Lumber"/> */}
          <option value="House">House</option>
          <option value="Field">Field</option>
          <option value="Pasture">Pasture</option>
          <option value="LumberMill">Lumber Mill</option>
          <option value="Well">Well</option>
        </select>
      </label>
      <button onClick={handleAdd}>Add</button>
      <CloseDialogBox onClose={handleCloseDialog}/>
    </div>
  );
};

export default AddImprovementDialog;