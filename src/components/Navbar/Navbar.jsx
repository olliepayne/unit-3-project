import { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = props => {
  return (
    <nav>
      <h2>Mountain</h2>
      <ul className="nav-links">
        {true ?
          <>
            <li><a className="link" href="/">Home</a></li>
            <li><a className="link" href="/routes">Routes</a></li>
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