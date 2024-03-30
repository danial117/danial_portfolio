








import React from 'react';

const AnimatedLine = () => {
  const lineStyles = {
    width: '100%',
    marginTop: '50px',
    height: '4px', /* Adjust thickness as needed */
    position: 'relative',
    overflow: 'hidden',
  };

  const lineAnimation = {
    content: '',
    position: 'absolute',
    top: '0',
    left: '0%',
    width: '30%',
    height: '100%',
    backgroundColor: 'red', /* Final color */
    animation: 'moveLine 2s linear forwards',
  };

  return (
    <div style={lineStyles}>
      <div style={lineAnimation}></div>
    </div>
  );
}

export default AnimatedLine;







