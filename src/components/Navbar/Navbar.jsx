import { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = props => {
  const { user } = props

  const [showUserLinks, setShowUserLinks] = useState(false)

  return (
    <nav>
      <h2>Rosetta Send</h2>
      <ul className="nav-links">
        {user ?
          <>
            <li><a className="link" href="/">Home</a></li>
            <li><a className="link" href="/routes">Routes</a></li>
            <li><a className="link" href="/routes/new">Add Route</a></li>
            <li>
              You
              {showUserLinks ?
                <div>
                  
                </div>
                :
                <>
                </>
              }
            </li>
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