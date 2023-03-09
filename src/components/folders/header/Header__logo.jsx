import React, { useState } from 'react'
import './Header__logo.scss'
import Gericht from '../../image/Gerícht.png'

function Header__logo() {
  const [menu, setMenu] = useState(false)
  const bod = document.querySelector('body')
  const bodd = document.querySelector('#root')
  if (menu == true) {
    bod.style.overflow = 'hidden'
    bodd.style.overflow = 'hidden'
  } else {
    bod.style.overflow = 'auto'
    bodd.style.overflow = 'auto'
  }

  const [scrol, setScrol] = useState(false)
  const offSet = 80;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })


  return (
    <>
    <div className={scrol == true ? "snippet" : ''}>
      <div className='container'>
        <div className='logo__inner'>
          <img src={Gericht} alt="" />
          <ul className='logo__ul'>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#contact">
              <li>Contact Us</li>
            </a>
            <a href="#blog">
              <li>Blog</li>
            </a>
          </ul>
          <ul className='logo__ul'>
            <li className='logo__ul__li1'><strong>Log In/Registration</strong></li>
            <li><strong>Book Table</strong></li>
          </ul>
          <span className={menu == true ? 'media media__active' : 'media'} onClick={() => setMenu(!menu)}></span>
        </div>
      </div>
      <ul className={menu == true ? 'nonee' : 'none'}>
        <a href="#home">
          <li onClick={() => setMenu(!menu)}>Home</li>
        </a>
        <a href="#contact">
          <li onClick={() => setMenu(!menu)}>Contact Us</li>
        </a>
        <a href="#blog">
          <li onClick={() => setMenu(!menu)}>Blog</li>
        </a>
      </ul>
    </div>
    </>
  )
}

export default Header__logo