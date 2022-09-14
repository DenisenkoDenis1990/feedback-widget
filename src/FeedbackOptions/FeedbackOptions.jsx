import React from 'react';

class FeedbackOptions extends React.Component {
  render() {
     const {onIncrement} = this.props;
    return (
      <div >
        <button type="button" onClick = {onIncrement} >Good</button>
        <button type="button" onClick = {onIncrement} >Neutral</button>
        <button type="button" onClick = {onIncrement} >Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
