import React from 'react'
import './Main.scss'
import Qowiq from '../../../image/qowiq.svg'
import Pichoq from '../../../image/pichoq.png'

function Main() {
  return (
    <div className='container'>
      <div className="main">
        <div className="main__inner">
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
    </div>
  )
}

export default Main