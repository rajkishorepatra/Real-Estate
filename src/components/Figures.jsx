import React from 'react'
import chess from '../img/chess.png'
// import { FaRegHandshake } from 'react-icons/fa'
// import { ImClipboard } from 'react-icons/im'
import { Fade } from 'react-reveal'

function Figures() {
  return (
    <div className='fig py-5 d-flex text-white' style={{ backgroundColor: "#3c3c3c" }}>
      <Fade left>
        <img src={chess} alt='man' className='mt-3'/>
      </Fade>
      <Fade right>
        <div className='p-3 figDiv'>
          <h3 style={{ fontWeight: "bold" }}>Make the Move of a Lifetime.</h3>
          <p className='my-4' style={{ fontSize: "1.2em", fontWeight: "400", color: 'lightgrey' }}>We're different because we have years of experience and our approach <br />is to work directly with us.</p>
          {/* <div className='d-flex figDiv mt-3'>
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
          </div> */}
        </div>
      </Fade>
    </div>
  )
}

export default Figures