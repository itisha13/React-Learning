
import './App.css';
import {useState} from 'react';

function App() {
  const [isClicked,setIsClicked] = useState(false);
    
    function toggle(){
        setIsClicked(!isClicked);
    }
    return (
        <div>
            <p className={isClicked==true?'active': undefined}>Style me!</p>
            <button onClick={toggle}>Toggle style</button>
        </div>
    );
}

export default App;
