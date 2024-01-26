// BtnMain.jsx

import { useState, useEffect } from 'react'
import '../css/BtnMain.css'
import PropTypes from 'prop-types'

const BtnMain = ({ onClick }) => {
  const [label, setLabel] = useState(
    window.innerWidth < 600 ? 'Tap to Explore' : 'Click to Explore'
  )

  useEffect(() => {
    const handleResize = () => {
      setLabel(window.innerWidth < 600 ? 'Tap to Explore' : 'Click to Explore')
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // eslint-disable-next-line no-unused-vars
  function debounce (fn, ms) {
    let timer
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    }
  }

  return (
    <button className='btn-hero' onClick={onClick}>
      {label}
    </button>
  )
}

BtnMain.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default BtnMain
