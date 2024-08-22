
import './App.css';

import React from 'react';
function App() {
    const inputRef = React.useRef();
    
  function clickHandler(){
      inputRef.current.click();
  }
  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input ref={inputRef} data-testid="file-picker" type="file" accept="image/*" />
        <button onClick={clickHandler}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;

