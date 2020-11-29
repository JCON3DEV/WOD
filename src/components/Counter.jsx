import React from 'react'
import Beat from './Beat'

export default function Counter({ beats }) {
  return (
    beats.map( beat => {
      return <Beat beat={ beat }/>
    })
  )
}
