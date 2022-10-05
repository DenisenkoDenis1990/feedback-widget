import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={option}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
