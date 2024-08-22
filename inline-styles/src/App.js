import React from 'react';
import './App.css'
function App() {
    const [choice, setChoice] = React.useState(null);
    let textColor = 'white';
    if (choice === 'yes') {
        textColor = 'green';
      } else if (choice === 'no') {
        textColor = 'red';
      }
    function yesClicked(){
        setChoice('yes');
    }
    function noClicked(){
        setChoice('no');
    }
    return (
    <div id="app">
      <h1 style={{ color: textColor }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={yesClicked}>Yes</button>
        </li>
        <li>
          <button onClick={noClicked}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;