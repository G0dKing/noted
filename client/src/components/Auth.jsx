// Auth.jsx


import { signInWithEmailAndPassword } from 'firebase/auth'

import google from '../assets/google.svg'
import fb from '../assets/fb.svg'
import '../css/Login.css'

const Auth = ({ isVisible, toggleModal, parentCallback }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (email, password) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!username || !password) {
      setError('Please enter both username and password.')
      setLoading(false)
      return
    }

    try {
      await signInWithEmailAndPassword(auth, email, password)

      } catch (jsonParseError) {
        setError('An error occurred. Please try reloading the page.')
      }
    } catch (error) {
      console.error('Error during login:', error)
      setError(
        'A server error has occurred. Please try again in a few minutes.'
      )
      setLoading(false)
    }
  }

  
