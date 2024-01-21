import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const Redirect = ({ to }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [to, navigate])

  return null
}

Redirect.propTypes = {
  to: PropTypes.string.isRequired
}

export default Redirect
