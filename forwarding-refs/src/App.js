import './App.css';

import Input from './Input';
import React from 'react';

export const userData = {
  name: '',
  email: '',
};

export default function App() {
    const name = React.useRef();
  const email = React.useRef();
   
  function handleSaveData() {
    userData.name = name.current.value;;
    userData.email = email.current.value;

    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={name} type="text" label="Your Name" />
      <Input ref={email} type="email" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}


