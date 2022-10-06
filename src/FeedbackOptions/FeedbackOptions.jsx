import React from 'react';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {Object.keys(options).map(option => {
        return (
          <Button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={option}
            option={option}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
