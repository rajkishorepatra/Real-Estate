import React from 'react'
import { Parallax } from 'react-parallax'
import { Button } from 'react-bootstrap'
import { Fade } from 'react-reveal'

function Consult() {
    return (
        <>
            <Parallax bgImage='https://ik.imagekit.io/dqe4fvjcky/H2_Square/bgimg-min_528sltV8z.jpg?updatedAt=1691328914968' strength={500} style={{width:"100vw"}}>
                <div className='d-flex aboutMain' id='contact'>
                    <Fade>
                        <div className='aboutData1 text-white'>
                            <h1 style={{ fontWeight: "bold" }} className='mb-4'>Get in touch with us</h1>
                            <p style={{ fontWeight: "600" }}>Our experts and developers would love to contribute their expertise and insights and help you today. Our experts and developers would love to contribute.</p>
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