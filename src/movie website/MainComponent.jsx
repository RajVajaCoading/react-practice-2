import React from 'react'
import Movie from './Movie'
import movie from '../movieData.json'

const MainComponentMovie = () => {
  return (
    <div>
        <h1>Movie</h1>
        {
           movie.map((item,index)=>{
            return(
                <>
                
                <Movie name={item.Title} img={item.Poster} year={item.Year}/>
                </>
            )
           }) 
        }
    </div>
  )
}

export default MainComponentMovie