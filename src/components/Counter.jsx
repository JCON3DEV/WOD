import React from 'react'
import Beat from './Beat'

export default function Counter({ beats, toggleBeat }) {
  return (
    beats.map( beat => {
      return <Beat key={ beat.id } beat={ beat } toggleBeat={toggleBeat} />
      //key needs to be updated to a unique place marker
    })
  )
}
