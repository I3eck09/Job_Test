import React from 'react'
import Cart from '../assets/svg/cart'
import './navbarStyle.css'

const Navbar = ({ action, search, keyword, submitSearch, getMovie }) => {
  return (
    <div className='navbar'>
      <div className='title' onClick={getMovie}>
        Movie-App
      </div>
      <div className='searchbar'>
        <form onSubmit={submitSearch}>
          <input 
            type='text'
            className='search' 
            value={keyword}
            onChange={search}
          />
        </form>
        <div>
          <button type='submit' onClick={action}><Cart /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
