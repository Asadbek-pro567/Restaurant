import React from 'react'
import './Header__logo.scss'
import Gericht from '../../image/Gerícht.png'

function Header__logo() {
  return (
    <div className='container'>
        <div className='logo__inner'>
            <img src={Gericht} alt="" />
            <ul className='logo__ul'>
                <li>Home</li>
                <li>Pages</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Landing</li>
            </ul>
            <ul className='logo__ul'>
                <li className='logo__ul__li1'><strong>Log In/Registration</strong></li>
                <li><strong>Book Table</strong></li>
            </ul>
        </div>
    </div>
  )
}

export default Header__logo