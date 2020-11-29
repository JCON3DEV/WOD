import React from 'react'
import Beat from './Beat'

export default function Counter({ beats }) {
  return (
    beats.map( beat => {
      return <Beat key={ beat.id } beat={ beat }/>
      //key needs to be updated to a unique place marker
    })
  )
}
