import React from 'react';
import Review from './Review';
import { useState } from 'react';
import './App.css';

// don't change the Component name "App"
function App() {
    const [feedbackInput,setFeedbackInput]=useState('');
    const [nameInput,setNameInput]=useState('');
    function clickHandlerFeed(event){
        setFeedbackInput(event.target.value);
    }
    function clickHandlerName(event){
        setNameInput(event.target.value);
    }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea value={feedbackInput} onChange={clickHandlerFeed}/>
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" value={nameInput} onChange={clickHandlerName}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedbackInput} student={nameInput}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
