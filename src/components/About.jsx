import React from 'react'
import { Parallax } from 'react-parallax'
import { Button } from 'react-bootstrap'
import { Fade } from 'react-reveal'

function About() {
    return (
        <>
        
            <Parallax bgImage='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img10-min_o-eOuqMSzC.jpg?updatedAt=1691328959541' strength={500} style={{backgroundColor:"#3c3c3c"}}>
                <div className='d-flex aboutMain' id="about">
                    <Fade>
                        <div className='aboutData'>
                            <h3 style={{ fontWeight: "bold" }} className=''>About HP Square</h3>
                            <p>“HP SQUARE” is a private, secure, gated community that sprawls over 2.2 acres. Spacious, thoughtfully designed homes. Every element of the apartment is of premium quality, focusing on the ethereal. The project HP is located Heart of the city with ample Open Space. There will be a sky bridge between Tower A & B.<br/>

                                The project will have limited edition of homes with 262 units of 2/3/3.5/4.5 BHK homes with 5-star amenities.  These superbly designed, modern-contemporary marvels gives you a spectacular view from every floor.
                                “HP SQUARE” comes studded with amazing amenities like: Indoor amenities: Banquet Hall, Gymnasium, Indoor games, Barbeque counter, Swimming pool, Kids Pool, Jacuzzi, Deck with cabana, Business Lawn, Chess Court, Outdoor amenities:  Social gathering lawn, Pergola, Shallow water deck, Pool cabana, Linear Garden, Community lawn, kids multiply, Badminton, Basketball court, Yoga Lawn, Mediation Deck, Star gazing lawn, Terrace Garden, Jogging track, Resting Square, Community Hall, Gymnasium Games Room, Barbeque counter, Card Room, Multi activity room (Lounge-AV Room-Library) and Sky lit Atrium to bask under the stars.
                                “HP SQUARE” has everything that’s built to last. Each home is designed to let in the utmost air and light.</p>
                        </div>
                    </Fade>
                    <div className='aboutData1 text-white'>
                        <h1>CONTACT US FOR CONSULTATION</h1>
                        <p>Our experts and developers would love to contribute their<br /> expertise and insights and help you today.</p>
                        <Button className='mt-5' href='#contact'>Contact Us</Button>
                    </div>
                </div>
            </Parallax>
        </>
    )
}

export default About