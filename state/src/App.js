
import './App.css';
import {React, useState} from 'react';


function App() {
  const [price,setPrice] = useState(100);
    
    function clickHandler(){
        setPrice(75);
    }
    
    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}

export default App;
