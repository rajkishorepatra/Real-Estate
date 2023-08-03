import React from 'react'
import bgimg from '../img/bgimg.jpg'
import { Parallax } from 'react-parallax'
import '../App.css'
import { Roll, Fade } from 'react-reveal'

function Hero() {
    return (
        <>
            <Parallax blur={2} bgImage={bgimg} bgImageStyle={{ maxHeight: "100vh", width: "100vw" }} strength={500}>
                <div className='text-center text-white pt-5 px-5' style={{ marginTop: "22vh" }}>
                    <Fade bottom>
                        <h1 className='text-white my-4'>A PLETHORA OF LUXURY</h1>
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
                        <h1 className='my-3'>Welcome To World-class residences in the heart of the city</h1>
                    </Fade>
                </div>
                <div style={{ height: '40vh' }} />
            </Parallax>
        </>
    )
}

export default Hero