import logo from './logo.svg';
import './App.css';

export function MainGoal(){
  return(
      <p className="ans">My main goal: Learn React in-depth and from the ground up</p>
      );
}


function App() {
  return (
    <div id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
        text.
      </p>
      <MainGoal/>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
      {/* OUTPUT YOUR COMPONENT HERE */}
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
