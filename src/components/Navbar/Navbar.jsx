import { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = props => {
  const { userID } = props

  const [isLoggedIn, setIsLoggedIn] = useState()

  useEffect(() => {
    setIsLoggedIn(userID ? true : false)
  }, [userID])

  return (
    <nav>
      <h2>Mountain</h2>
      <ul className="nav-links">
        {isLoggedIn ?
          <>
            <li><a className="link" href="/">Home</a></li>
            <li><a className="link" href="/routes">Routes</a></li>
            <li><a className="link" href="/" onClick={props.handleLogout}>Logout</a></li>
          </>
          :
          <>
            <li><a className="link" href="/">Home</a></li>
            <li><a className="link" href="/routes">Routes</a></li>
            <li><a className="link" href="/login">Login</a></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Navbar