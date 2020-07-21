import React from 'react';

function Description(props) {
  return (    
    <div>
        <h4 style={{ marginTop: 30, fontStyle: 'italic' }}>{props.data.text}</h4>
    </div>
  );
}

export default Description;
