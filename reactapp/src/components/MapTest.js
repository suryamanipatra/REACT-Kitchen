import React from 'react'

function MapTest() {
    const arr = [1,2,3,4];
    const MappResult = arr.map((ar) =>
        (ar * 2)
     )

  return (
    <div>{MappResult}</div>
  )
}

export default MapTest