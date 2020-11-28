import React from 'react';
import logo from './mintbean.png';
// import Button from "./compone  nts/button";
import Counter from "./components/counter";
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <code>App.js</code> is the entrypoint to your app.
      </p>
      <h2>HAPPY HACKING!</h2>
      <h3>This is the WOD generator</h3>

      <input type="text" />    
      <button>Add Exercise</button>
      <button>Clear Exercise</button>
      <Counter />
    </div>
  );
}

export default App;
