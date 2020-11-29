import React from 'react'

export default function Beat({ beat, toggleBeat }) {
  function handleToggleBeatClick(){
    toggleBeat(beat.id);
  }

  return (
    <div>
      <label >
        <input type="checkbox" checked={beat.selected} onChange={handleToggleBeatClick}/>{ beat.name }
      </label>
    </div>
  )
}
