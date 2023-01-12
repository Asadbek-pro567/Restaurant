import React, { useState } from 'react'
import './Header.scss'
import Qowiq from '../../../image/qowiq.svg'
import Hero from '../../../image/Hero.png'
import Pichoq from '../../../image/pichoq.png'
import Kokteyl from '../../../image/kokteyl.png'

function Header() {
  const dataData = new Date()
  const kun = dataData.getDate() 
  const oy = dataData.getMonth() + 1
  const yil = dataData.getFullYear()
  
  const [chan, setChan] = useState('')
  console.log(chan);

  return (
    <>
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
      <div className="main">
        <div className="main__inner">
          <div className="container">

            <div className='main__list'>
              <div className='inner__left'>
                <h3>About Us</h3>
                <img src={Qowiq} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button>Know more</button>
              </div>
              <img className='pichoq' src={Pichoq} alt="" />
              <div className='inner__right'>
                <h3>Our History</h3>
                <img src={Qowiq} alt="" />
                <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                <button>Know more</button>
              </div>
            </div>
          </div>
        </div>

        <div className="main__table">
          <div className="container">
            <div className="table__inner">
              <h6>Reservations</h6>
              <img src={Qowiq} alt="" />
              <h2>Book A Table</h2>
              <div>
                <select onChange={(e)=> setChan(e.target.value)}>
                  <option value='1'>1 person</option>
                  <option value='2'>2 person</option>
                  <option value='3'>3 person</option>
                </select>
                <select>
                  <option>{kun}/{oy}/{yil}</option>
                  <option>{kun +1}/{oy}/{yil}</option>
                  <option>{kun + 2}/{oy}/{yil}</option>
                  <option>{kun + 3}/{oy}/{yil}</option>
                </select>
                <div>
                  <h4>{chan == 1? '11:00 AM' : chan == 2? '15:00 AM' : '19:00 AM'}</h4>
                </div>
              </div>
                <button>Book Now</button>
            </div>
          </div>
        </div>

        <div className="main__menu">
          <div className="container">
            <div className="menu__inner">
              <h2>Bar Menu</h2>
              <h2>Food Menu</h2>
              <h2>Desserts Menu</h2>
            </div>
          </div>
        </div>

        <div className="main__today">
          <div className="container">
            <div className="today__inner">
              <h6>Menu that fits you palatte</h6>
              <img src={Qowiq} alt="" />
              <h2>Today’s Special</h2>
              <div>
                <div>
                  <h3>Wine & Beer</h3>
                  <div>
                    <h5>Chapel Hill Shiraz</h5>
                    <h6>$56</h6>
                  </div>
                  <p>AU | Bottle</p>

                  <div>
                    <h5>Catena Malbec</h5>
                    <h6>$59</h6>
                  </div>
                  <p>AR | Bottle</p>

                  <div>
                    <h5>La Vieille Rosé</h5>
                    <h6>$44</h6>
                  </div>
                  <p>FR | 750 ml</p>

                  <div>
                    <h5>Rhino Pale Ale</h5>
                    <h6>$31</h6>
                  </div>
                  <p>CA | 750 ml</p>

                  <div>
                    <h5>Irish Guinness</h5>
                    <h6>$26</h6>
                  </div>
                  <p>IE | 750 ml</p>
                </div>
                <img src={Kokteyl} alt="" />
                <div>
                  <h3>Cocktails</h3>
                  <div>
                    <h5>Aperol Spritz</h5>
                    <h6>$20</h6>
                  </div>
                  <p>Aperol | Villa Marchesi prosecco | soda | 30ml</p>

                  <div>
                    <h5>Dark 'N' Stormy</h5>
                    <h6>$16</h6>
                  </div>
                  <p>Dark rum | Ginger beer | Slice of lime. </p>

                  <div>
                    <h5>Daiquiri</h5>
                    <h6>$10</h6>
                  </div>
                  <p>Rum | Citrus juice | Sugar</p>

                  <div>
                    <h5>Old Fashioned</h5>
                    <h6>$31</h6>
                  </div>
                  <p>Bourbon | Brown sugar | Angostura Bitters</p>

                  <div>
                    <h5>Negroni</h5>
                    <h6>$26</h6>
                  </div>
                  <p>Gin | Sweet Vermouth | Campari | Orange garnish</p>
                </div>
              </div>
              <button>View More</button>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Header