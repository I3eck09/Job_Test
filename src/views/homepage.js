import React, { useState, useEffect } from 'react'
import './homepageStyle.css'
import { 
  Movie,
  Navbar,
  Cart,
 } from '../components'

const Homepage = () => {

  const [movie, setMovie] = useState([])
  const [cart, setCart] = useState(() => {
    const saveMovie = localStorage.getItem('Movies')
    if (saveMovie) {
      return JSON.parse(saveMovie)
    } else {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState('')

  const MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?api_key=4be2595988fdcab8c1e973d60c196a40&language=en-US&page=1'
  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

  const getMovieList = () => {
    fetch(MOVIE_API)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setMovie(data.results)
    })
  }

  const handleAddCart = (movie) => {
    // setCart([...cart, movie])

    const currentIndex = cart.indexOf(movie)
    const newSelected = [...cart]

    if (currentIndex === -1) {
      localStorage.setItem('Movies', JSON.stringify(cart))
      newSelected.push(movie)
    } else {}

    setCart(newSelected)
  }

  const handleRemoveCart = (movie) => {
    const currentIndex = cart.indexOf(movie)
    const newSelected = [...cart]

    if (currentIndex === -1) {
    } else {
      localStorage.removeItem('Movies')
      newSelected.splice(currentIndex, 1)
    }

    setCart(newSelected)
  }

  const handleOpen = () => setIsOpen(!isOpen)

  const handleSearch = (event) => {
    event.preventDefault()

    if (keyword) {
      fetch(SEARCH_API + keyword)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setMovie(data.results)
      })
    }
  }

  const handleOnChangeSearch = (event) => {
    setKeyword(event.target.value)
  }

  useEffect(() => {
    getMovieList()
  }, [])

  return (
    <div className='container'>
        <Navbar action={handleOpen} search={handleOnChangeSearch} keyword={keyword} submitSearch={handleSearch} getMovie={getMovieList} />
        <Movie 
          // key={movie.id} 
          data={movie} 
          action={handleAddCart}
        />
          {isOpen ? 
            <div className='modal-cart'>
              <Cart data={cart} action={handleRemoveCart} />
            </div>
          : <></>}
    </div>
  )
}

export default Homepage
