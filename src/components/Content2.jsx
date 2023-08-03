import React from 'react'
import heroImg from '../img/hero-image.webp'
import { Parallax } from 'react-parallax'
import CountUp from 'react-countup'

function Content2() {
    return (
        <>
            <Parallax bgImage={heroImg} bgImageStyle={{maxHeight:"100vh", width: "100vw" }} strength={500}>
                <div className='d-flex cont2 m-5'>
                    <div className='p-2 text-white m-2'>
                        <CountUp end={450} duration={5} style={{fontSize:"2em", fontWeight:"bold"}}/>
                        <h2>Listings</h2>
                    </div>

                    <div className='p-2 text-white m-2'>
                        <CountUp end={300} duration={5} style={{fontSize:"2em", fontWeight:"bold"}}/>
                        <h2>Locations</h2>
                    </div>

                    <div className='p-2 text-white m-2'>
                        <CountUp end={1450} duration={5} style={{fontSize:"2em", fontWeight:"bold"}}/>
                        <h2>Customers</h2>
                    </div>

                    <div className='p-2 text-white m-2'>
                        <CountUp end={250} duration={5} style={{fontSize:"2em", fontWeight:"bold"}}/>
                        <h2>Buyers</h2>
                    </div>
                </div>
            </Parallax>
        </>
    )
}

export default Content2