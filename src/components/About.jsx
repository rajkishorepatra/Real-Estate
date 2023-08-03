import React from 'react'
import { Parallax } from 'react-parallax'
import realImg1 from '../img/real-estate-2.jpg'
import { Button} from 'react-bootstrap'
import { Fade } from 'react-reveal'

function About() {
    return (
        <>
            <Parallax bgImage={realImg1} bgImageStyle={{ maxHeight: "100vh", width: "100vw" }} strength={500}>
                <div className='d-flex aboutMain'>
                    <Fade>
                        <div className='aboutData'>
                            <h3 style={{ fontWeight: "bold" }} className='mb-4'>About our agency</h3>
                            <p>With over $2 Billion in sales, Our agency is the industry’s top luxury producer with over 27 years of experience in marketing Seattles’s most prestigious waterfront properties.<br /><br />
                                Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council.<br /><br />
                                Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She is also and is an elite member to Corcoran’s Presidents Council. </p>
                        </div>
                    </Fade>
                    <div className='aboutData1 text-white'>
                        <h1>REQUEST A FREE CONSULTATION</h1>
                        <p>Our experts and developers would love to contribute their expertise and insights and help you today. Our experts and developers.</p>
                        <Button className='mt-5'>Contact Us</Button>
                    </div>
                </div>
            </Parallax>
        </>
    )
}

export default About