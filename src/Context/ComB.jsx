import React from 'react'
import ComC from './ComC'

const ComB = () => {
  return (
    <div style={{backgroundColor:"red"}}>
        component B
        <ComC />
    </div>
  )
}

export default ComB