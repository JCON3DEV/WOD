import React, { useState, useRef, useEffect } from 'react';
import logo from './mintbean.png';
// import Button from "./compone  nts/button";
import Counter from "./components/Counter";
import uuidv4 from 'uuid/v4';

import './styles/index.css';

function App() {
  const [beats, setBeats] = useState([]);
  const beatNameRef = useRef();
  const LOCAL_STORAGE_KEY = Counter.beats;
  // ###### confirm the above //


  // Below allows saving within the app. No DB
  useEffect(() => {
    const storedBeats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    /* have to parse the above because it expects a string */
    if(storedBeats) setBeats(storedBeats);
  }, [])
  /* above will only render once because the dependency array is empty 
  and will never change */

  useEffect( () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(beats));
  }, [beats]);

  function handleAddBeat(event) {
    const name = beatNameRef.current.value
    if (name === "") return /* prevents empty string being entered into state */ 
    beatNameRef.current.value = null;/*This line clears input after submission*/
    setBeats(prevBeats => {
      return [...prevBeats, {id:uuidv4(), name:name, selected:false }]
    }) /* This adds each new input to the already existing state*/ 
    /* To make this state persist. we use UsEffect and localStorage*/   
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <h3>This is the WOD generator</h3>
      <Counter beats={beats} />

      <input type="text" ref={beatNameRef} />
      <button onClick={handleAddBeat} >Add Exercise</button>
      <button>Clear Exercise</button>
      <div>{beats.length} Total Beats</div>

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
