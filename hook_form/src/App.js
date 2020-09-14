import React, {useState} from 'react';
import Form from "./components/Form";
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div className="App">
      <form inputs={state} setInputs = {setState}/>
    </div>
  );
}

export default App;
