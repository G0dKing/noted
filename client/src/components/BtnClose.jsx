// BtnClose.jsx

import '../css/BtnClose.css'

// eslint-disable-next-line react/prop-types
function BtnClose ({ onClick }) {
  return (
    <button className='btn-x' onClick={onClick}>
      X
    </button>
  )
}

export default BtnClose
