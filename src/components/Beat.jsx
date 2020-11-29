import React from 'react'

export default function Beat({ beat }) {
  return (
    <div>
      <label >
        <input type="checkbox" checked={beat.selected} />{ beat.name }
      </label>
    </div>
  )
}
