
import React, { useState } from 'react';

function CloseDialogBox({ onClose }) {
    return (
        <div>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default CloseDialogBox;