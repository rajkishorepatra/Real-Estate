import React from 'react'
import { Fade } from 'react-reveal';


function Testimonials() {
  return (
    <div className='text-white' style={{ backgroundColor: "#3c3c3c" }}>
      <Fade>
        <h1 className='text-center pt-4'>Testimonials</h1>
        <p className='text-center px-5'>Building Trust, Building Agency</p>
      </Fade>
      <div className='d-flex testCard px-3 py-3'>
        <figure class="snip1533 m-4">
          <Fade>
            <figcaption>
              <blockquote>
                <p>The project with the best connectivity that i found with Harshpriya group. Iwish them many more success in future.</p>
              </blockquote>
              <h3>RAJESH PRASAD</h3>
              <h4>Customer</h4>
            </figcaption>
          </Fade>
        </figure>
        <figure class="snip1533 m-4">
          <Fade>
            <figcaption>
              <blockquote>
                <p>There sufficient space to tour around, very spacious apartments. I wish Harshpriya Group to grow more in future.</p>
              </blockquote>
              <h3>RAJENDRA PRASAD</h3>
              <h4>Customer</h4>
            </figcaption>
          </Fade>
        </figure>
      </div>
    </div>
  )
}

export default Testimonials