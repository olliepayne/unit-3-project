import './Navbar.css'

const Navbar = (props) => {
  return (
    <nav>
      <h2>Mountain</h2>
      <ul className="nav-links">
        <li><a className="link" href="/">Home</a></li>
        <li><a className="link" href="/routes">Routes</a></li>
      </ul>
    </nav>
  )
}

export default Navbar