import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className='nav'>
         
            <Link to="/">
                    <li>HOME</li>
            </Link>
            <Link to='/about'>
                    <li>ABOUT US</li>
            </Link>
            <Link to='/shop'>
                    <li>SHOP </li>
            </Link>
            <Link to='/contact-us'>
                    <li>CONTACT US </li>
            </Link>
        </div>
    )
}
