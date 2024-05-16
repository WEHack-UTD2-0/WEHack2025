"use client"
import React from 'react'
import './Nav.css'
import { useState } from 'react'
 
function Nav() {

  return (
    <nav> 
        <div className="nav-header">      
            <img className="wehack-logo h-auto max-w-12 lg:max-w-16" src={"/static/images/LogoSparkle.png"} alt="wehack logo"></img>
        </div>

        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

        <ul className="collapse-menu">
          <li><a className='text-lg lg:text-base' href="#about-wehack">About</a></li>
          <li><a className='text-lg lg:text-base' href="#FAQ">FAQ</a></li>
          <li><a className='text-lg lg:text-base' href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Conduct</a></li>
        </ul>

        {/* MLH 2024 BADGE */}
        <a className="mlh-trust-badge" 
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white" 
      target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" 
      alt="Major League Hacking 2024 Hackathon Season"/></a>
  </nav>
  )
}

export default Nav