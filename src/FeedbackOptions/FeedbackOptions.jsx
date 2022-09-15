import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const capitalized = null;
  return (
    <div>
      {options.map(option => {
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
