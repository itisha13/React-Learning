
import './App.css';
import Toast from './Toast';
import React from 'react';

function App() {
    const [isClicked,setIsClicked] = React.useState(false);
  function handleEnrol() {
    // Todo: Show toast
    setIsClicked(true);

    setTimeout(() => {
        setIsClicked(false);
      // Todo: hide toast
    }, 3000);
  }

  return (
    <div id="app">
    {isClicked && <Toast message="Enrolled successfully!"/>}
      {/* Todo: Render <Toast /> component (conditionally) here */}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;


