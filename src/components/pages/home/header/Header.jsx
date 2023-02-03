import React, { useState } from 'react'
import './Header.scss'
import Qowiq from '../../../image/qowiq.svg'
import Hero from '../../../image/Hero.png'
import Pichoq from '../../../image/pichoq.png'
import Kokteyl from '../../../image/kokteyl.png'
import Kareys from '../../../image/kareys1.png'
import Qowtir from "../../../image/qow.svg"
import Odam1 from '../../../image/odam1.png'
import Odam2 from '../../../image/odam2.png'
import Odam3 from '../../../image/odam3.png'
import Odam4 from '../../../image/odam4.png'
import Video from '../../../image/Video.png'
import Bib1 from '../../../image/bib1.png'
import Bib2 from '../../../image/bib2.png'
import Bib3 from '../../../image/bib3.png'
import Bib4 from '../../../image/bib4.png'
import Ovqat from '../../../image/ovqat.png'
import G from '../../../image/G.png'


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

        
        <div className="main_kareys">
          <div className='container'>
            <div className="main_kabox">
              <div className="main_ka_img">
                <img src={Kareys} alt="" />
              </div>
              <div className="main_katext">
                <h6>Chef’s Word</h6>
                <img src={Qowiq} alt="" />
                <h2>What we believe in</h2>
                <p><span><img src={Qowtir} alt="" /></span>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                <h5>Kevin Luo</h5>
                <h6>Chef & Founder</h6>
                <h2 className='kevin'>Kevin Luo</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="customers">
          <div className="container">
            <div className="customers__inner">
              <h4>Testimony</h4>
              <img src={Qowiq} alt="" />
              <h2>Happy customers</h2>
              <div className='happy__list'>
                <div className='happy__item'>
                  <div className='odam1'>
                    <img src={Odam1} alt="" />
                    <img src={Qowtir} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                    <h3>Wade Warren</h3>
                    <h5>Sommelier</h5>
                  </div>
                </div>
                <div className='happy__item'>
                  <div className='odam1'>
                    <img src={Odam2} alt="" />
                    <img src={Qowtir} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                    <h3>Jane Cooper</h3>
                    <h5>Chef</h5>
                  </div>
                </div>
                <div className='happy__item'>
                  <div className='odam1'>
                    <img src={Odam3} alt="" />
                    <img src={Qowtir} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                    <h3>Robert Fox</h3>
                    <h5>Chef</h5>
                  </div>
                </div>
                <div className='happy__item'>
                  <div className='odam1'>
                    <img src={Odam4} alt="" />
                    <img src={Qowtir} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.</p>
                    <h3>Brooklyn Simmons</h3>
                    <h5>Caterer</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="container">
            <div>
              <img src={Video} alt="" />
            </div>
          </div>
        </div>

        <div className="laurels">
          <div className="container">
            <div className="laurels__inner">
              <div>
                <div className='our'>
                  <h4>Awards & recognition</h4>
                  <img src={Qowiq} alt="" />
                  <h2>Our Laurels</h2>
                </div>
                <ul>
                  <li>
                    <img src={Bib1} alt="" />
                    <span>
                      <h6>Bib Gourmond</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </span>
                  </li>
                  <li>
                    <img src={Bib2} alt="" />
                    <span>
                      <h6>Rising Star</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </span>
                  </li>
                  <li>
                    <img src={Bib3} alt="" />
                    <span>
                      <h6>AA Hospitality </h6>
                      <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </span>
                  </li>
                  <li>
                    <img src={Bib4} alt="" />
                    <span>
                      <h6>Outstanding Chef</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur.</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className='ovqa'>
                <img src={Ovqat} alt=""  className='ovqat'/>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default Header