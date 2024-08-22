import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [isDeleted, setIsDeleted] = useState(false);
    function toggle(){
        setIsDeleted(!isDeleted);
    }
    return (
      <div>
      {isDeleted ? <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={toggle}>Proceed</button>
        </div> : <button onClick={toggle}>Delete</button>}
        
        
      </div>    
    );
}

export default App;
