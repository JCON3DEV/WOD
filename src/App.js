import React, { useState, useRef } from 'react';
import logo from './mintbean.png';
// import Button from "./compone  nts/button";
import Counter from "./components/Counter";

import './styles/index.css';

function App() {
  const [beats, setBeats] = useState([]);
  // { id:1, name:'Beat 1', selected: false }
  const beatNameRef = useRef();

  function handleAddBeat(event) {
    const name = beatNameRef.current.value
    if (name === "") return /* prevents empty string being entered into state */ 
    beatNameRef.current.value = null;/*This line clears input after submission*/
    
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h3>This is the WOD generator</h3>
      <Counter beats={beats} />

      <input type="text" ref={beatNameRef} />
      <button onClick={handleAddBeat} >Add Exercise</button>
      <button>Clear Exercise</button>
      <div>0 Total Beats</div>

      <div>
        <label>1/16</label>
        <input type="checkbox" name="1/16" id="0" />
        <label>2/16</label>
        <input type="checkbox" name="2/16" id="1" />
        <label>3/16</label>
        <input type="checkbox" name="3/16" id="2" />
        <label>4/16</label>
        <input type="checkbox" name="4/16" id="3" />
      </div>
    </div>
  );
}

export default App;
