import React from 'react'
import Bin from '../assets/svg/bin'
import './cartStyle.css'

const Cart = ({ data, action }) => {

  const IMG_API = "https://image.tmdb.org/t/p/w1280"

  return (
    <div className='modal-container'>
      <div className='header'>
        Cart
      </div>
      <div className='content'>
        <div className='movie-list'>
          {data.map((movie) => {
            return (
              <div className='cart-list'>
                <div className='movie-item'>
                  <img 
                    alter={movie.title}
                    src={IMG_API + movie.poster_path}
                  />
                  <li>{movie.title}</li>
                </div>
                <div className='action'>
                  <button onClick={() => action(movie)}><Bin /></button>
                </div>
              </div>
            )
          })}
        </div>
        <div className='total-amount'>
          <div className='info'>
            <label id='head'>Summary</label>
            <label id='total-list'>Item {data.length} </label>
            <label id='net-amount'>Subtotal</label>
          </div>
          <div className='button-block'>
            <button id='buy-now' disabled>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
