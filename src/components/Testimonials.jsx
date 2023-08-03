import React from 'react'
import { Fade } from 'react-reveal';


function Testimonials() {
  return (
    <>
      <Fade>
        <h1 className='text-center mt-5'>Testimonials</h1>
        <p className='text-center px-5'>Publish the best of your client testimonials and let the world know what <br />a agent or real estate agency you are. Testimonials build trust</p>
      </Fade>
      <div className='d-flex testCard mx-3 my-3'>
        <figure class="snip1533 m-4">
          <Fade>
            <figcaption>
              <blockquote>
                <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
              </blockquote>
              <h3>Wisteria Ravenclaw</h3>
              <h4>Bhubaneswar</h4>
            </figcaption>
          </Fade>
        </figure>
        <figure class="snip1533 m-4">
          <Fade>
            <figcaption>
              <blockquote>
                <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
              </blockquote>
              <h3>Ursula Gurnmeister</h3>
              <h4>Cuttack</h4>
            </figcaption>
          </Fade>
        </figure>
        <figure class="snip1533 m-4">
          <Fade>
            <figcaption>
              <blockquote>
                <p>The only skills I have the patience to learn are those that have no real application in life. </p>
              </blockquote>
              <h3>Ingredia Nutrisha</h3>
              <h4>Bhubaneswar</h4>
            </figcaption>
          </Fade>
        </figure>
      </div>
    </>
  )
}

export default Testimonials