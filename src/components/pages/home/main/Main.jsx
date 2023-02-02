import React from 'react'
import './Main.scss'
import Qowiq from '../../../image/qowiq.svg'
import Pichoq from '../../../image/pichoq.png'
import Qayci from '../../../image/qayci.png'

function Main() {
  return (
    <div className='container'>
      <div className="main">
        <div className="main__inner">
          <div className='main__list'>
            <div className='inner__left'>
              <h3 className='left__h3'>About Us</h3>
              <img className='left__qowiq' src={Qowiq} alt="" />
              <p className='left__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
              <button className='left__button'>Know more</button>
            </div>
            <img className='pichoq' src={Pichoq} alt="" />
            <div className='inner__right'>
              <h3 className='left__h3'>Our History</h3>
              <img className='right__qowiq' src={Qowiq} alt="" />
              <p className='right__p'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
              <button className='right__button'>Know more</button>
            </div>
          </div>
          <img className='inner__qayci' src={Qayci} alt="" />
        </div>

        <div className="main__table">
          <div className='main__book'>
            <h6>Reservations</h6>
            <img src={Qowiq} alt="" />
            <h3>Book A Table</h3>
            <div>
              <select>
                <option>I person</option>
                <option>II person</option>
                <option>III person</option>
                <option>IV person</option>
              </select>
              <select>
                <option>27/12/2022</option>
                <option>28/12/2022</option>
                <option>29/12/2022</option>
                <option>30/12/2022</option>
              </select>
              <select>
                <option>11:00 AM</option>
                <option>11:00 AM</option>
                <option>11:00 AM</option>
                <option>11:00 AM</option>
              </select>
            </div>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main