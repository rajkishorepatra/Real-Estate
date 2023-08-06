import React from 'react'
import heroImg from '../img/img4.jpg'
import { Parallax } from 'react-parallax'
// import CountUp from 'react-countup'

function Content2() {
    return (
        <>
            <Parallax bgImage={heroImg} bgImageStyle={{maxHeight:"100vh", width: "100vw" }} strength={500}>
                <div style={{height:"50vh"}}>
                    
                </div>
            </Parallax>
        </>
    )
}

export default Content2