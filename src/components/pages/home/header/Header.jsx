import React from 'react'
import './Header.scss'
import Qowiq from '../../../image/qowiq.svg'
import Hero from '../../../image/Hero.png'

function Header() {
  return (
    <div className='container'>
        <div className="header">
          <div className='header__inner'>
              <span className='header__span'>
                <b>#Bar</b>
                <b>#Gericht</b>
              </span>
              <div className='header__head'>
                <span>
                  <h6>Chase the new Flavour</h6>
                  <img src={Qowiq} alt="" />
                </span>
                <h2>The key to Fine dining</h2>
                <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <button>Explore Menu</button>
              </div>
              <img className='hero__img' src={Hero} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Header