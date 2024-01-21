// App.jsx

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Redirect from './components/Redirect'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  function callbackFunction (childData) {
    setLoggedIn(childData)
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<LandingPage parentCallback={callbackFunction} />}
          />
          <Route
            path='/dashboard'
            element={loggedIn ? <Dashboard /> : <Redirect to='/' />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
