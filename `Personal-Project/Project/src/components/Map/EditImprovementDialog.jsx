import React, { useState } from 'react';
import './styles/EditImprovementDialog.css';
import CloseDialogBox from './CloseDialogButton.jsx';

const EditImprovementDialog = ({ improvement, updateResources, closeDialog }) => {
  const [isDialogVisible, setIsDialogVisible] = useState(true);  // Managing dialog box visibility state
  
  const handleUpgrade = () => {
    // TODO: Handle upgrade logic
  };

  const handleDowngrade = () => {
    // TODO: Handle downgrade logic
  };

  const handleRemove = () => {
    // TODO: Handle remove logic
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false); // Close the dialog when the button is clicked
    closeDialog(); // Call the closeDialog prop (if needed)
  };

  return (
    isDialogVisible && (
      <div className="edit-improvement-dialog">
        <h3>{improvement.type}</h3>
        <button onClick={handleUpgrade}>Upgrade</button>
        <button onClick={handleDowngrade}>Downgrade</button>
        <button onClick={handleRemove}>Remove</button>
        <CloseDialogBox onClose={handleCloseDialog} />
      </div>
    )
  );
};

export default EditImprovementDialog;