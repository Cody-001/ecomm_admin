import React from 'react'
import nav_logo from "../assets/nav-logo.svg"
import profile_image from "../assets/nav-profile.svg"

const Navbar = () => {
  return (
    <div className='adminNav'>
        <img src={nav_logo} alt="" />
        <img src={profile_image} alt="" />
    </div>
  )
}

export default Navbar