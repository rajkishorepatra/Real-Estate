import React from 'react'
import man from '../img/man.png'
import { FaRegHandshake } from 'react-icons/fa'
import { ImClipboard } from 'react-icons/im'
import { Fade } from 'react-reveal'

function Figures() {
  return (
    <div className='fig px-3 mt-3 d-flex'>
      <Fade left>
        <img src={man} alt='man'  className='mt-5'/>
      </Fade>
      <Fade>
        <div className='mt-5 p-3'>
          <h3 style={{ fontWeight: "bold" }}>We have everything you need to buy or sell quickly!</h3>
          <p className='my-2' style={{ fontSize: "1.2em", fontWeight: "400", color: 'grey' }}>We're different because we have years of experience and our approach <br />is to work directly with us.</p>
          <div className='d-flex figDiv mt-3'>
            <div className='p-2'>
              <FaRegHandshake size={60} />
              <h3 style={{ fontWeight: "bold" }}>Buy Properties</h3>
              <p style={{ color: 'grey' }}>We're different because we have years of experience and our approach is to,</p>
            </div>
            <div className='p-2'>
              <ImClipboard size={60} />
              <h3 style={{ fontWeight: "bold" }}>Sell Properties</h3>
              <p style={{ color: 'grey' }}>We're different because we have years of experience and our approach is to,</p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Figures