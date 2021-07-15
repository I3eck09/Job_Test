import React from 'react'
import './movieStyle.css'

const Movie = ({
  key, 
  data,
  action,
}) => {

  const IMG_API = "https://image.tmdb.org/t/p/w1280"

  return (
    <div className='movie'>
      { data.length > 0 &&
      data.map((item) => {
        return (
          <div className='movie-card'>
            <img 
              alter={item.title}
              src={IMG_API + item.poster_path} 
            /> 
            <div className='movie-info'>
              <div className='title'>
                <h2 className='movie-title'>{item.title}</h2>
                <label className='movie-rate'>{item.vote_average}</label>
              </div>
              <div className='button-block'>
                <button className='add-cart' onClick={() => action(item)}>Add to Cart</button>
              </div>
            </div>

            {/* <div className='movie-overview'>
              <h2>Overview</h2>
              <p>{item.overview}</p>
            </div> */}
          </div>
        )
      })}
    </div>
  )
}

export default Movie



