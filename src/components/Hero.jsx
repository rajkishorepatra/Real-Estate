import React from 'react'
import '../App.css'
import vdo from '../img/h2square.mp4'
// import { Roll, Fade } from 'react-reveal'

function Hero() {
    return (
        <>
            <video autoPlay loop muted id='home'>
                <source src={vdo}/>
            </video>

            {/* <div className='text-center text-white pt-5 px-5' style={{backdropFilter:"blur(1px)", zIndex:"100"}}>
                    <Fade bottom>
                        <h1 className='text-white my-4'>PINACLE OF EXCLUSIVE LIVING</h1>
                    </Fade>
                    <div className='d-flex justify-content-center my-4'>
                        <Fade right>
                            <hr className='mx-4' />
                        </Fade>
                        <Roll>
                            <h4>x</h4>
                        </Roll>
                        <Fade left>
                            <hr className='mx-4' />
                        </Fade>
                    </div>
                    <Fade top>
                        <h1 className='my-3' style={{letterSpacing:"2px"}}>EXPERIENCE A CLASS BEYOND ELITE</h1>
                    </Fade>
                </div> */}
        </>
    )
}

export default Hero