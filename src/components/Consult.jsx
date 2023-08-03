import React from 'react'
import { Parallax } from 'react-parallax'
import realImg1 from '../img/bgimg1.jpg'
import { Button } from 'react-bootstrap'
import { Fade } from 'react-reveal'

function Consult() {
    return (
        <>
            <Parallax bgImage={realImg1} bgImageStyle={{ maxHeight: "100vh", width: "100vw" }} strength={500}>
                <div className='d-flex aboutMain'>
                    <Fade>
                        <div className='aboutData1 text-white'>
                            <h1 style={{ fontWeight: "bold" }} className='mb-4'>Get in touch with us</h1>
                            <p style={{ fontWeight: "bold" }}>Our experts and developers would love to contribute their expertise and insights and help you today. Our experts and developers would love to contribute.</p>
                        </div>
                    </Fade>
                    <div className='aboutData2'>
                        <h3>Contact Us</h3>

                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Your Name" name="name" id='name' required />
                            <label for="name" class="form__label">Your Name</label>
                        </div>

                        <div class="form__group field">
                            <input type="email" class="form__field" placeholder="Your Email" name="email" id='email' required />
                            <label for="email" class="form__label">Your Email</label>
                        </div>

                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Number" name="number" id='number' required />
                            <label for="name" class="form__label">Your Number</label>
                        </div>

                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Message" name="msg" id='msg' required />
                            <label for="name" class="form__label">Your Message</label>
                        </div>

                        <div className=" mt-4 my-3">
                            <Button>Submit</Button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </>
    )
}

export default Consult