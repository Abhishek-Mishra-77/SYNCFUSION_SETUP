import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
          <ul className="flex gap-10 p-4 bg-red-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/testing">Testing</Link></li>
            {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
          </ul>
        </div>
  )
}

export default Navbar
