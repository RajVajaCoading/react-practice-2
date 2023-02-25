import React from 'react'
import ComB from './ComB'

const ComA = () => {
  return (
    <div style={{backgroundColor:"yellow"}}>
        component A
        <ComB />
    </div>
  )
}

export default ComA