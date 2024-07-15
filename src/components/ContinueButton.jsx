import React from 'react';


const ContinueButton = () => {
  const handleContinue = () => {
    alert('Continue button clicked!');
  };

  return (
    <button className="continue-button" onClick={handleContinue}>
      Continue Shopping
    </button>
  );
};

export default ContinueButton;
