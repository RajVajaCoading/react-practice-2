import React from 'react'

const Movie = ({name,img,year}) => {
  return (
    <div>
        
        <div className='main'>
            <img src={img} alt="img" />
            <h6>{name}</h6>
            <h6>Year :- {year}</h6>
        </div>
    </div>
  )
}

export default Movie