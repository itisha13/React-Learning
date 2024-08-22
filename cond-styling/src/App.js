
import './App.css';

import React from 'react';
function App() {
    const [choice,setChoice] = React.useState(null);
    function yesclickHandler(){
        setChoice('yes');
    }
    function noclickHandler(){
        setChoice('no');
    }
    
    let assigned;
    if(choice==='yes'){
        assigned = "highlight-green";
    }else if(choice==='no'){
        assigned = "highlight-red";
    }
  return (
    <div id="app">
      <h1 className={assigned}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={yesclickHandler}>Yes</button>
        </li>
        <li>
          <button onClick={noclickHandler}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

