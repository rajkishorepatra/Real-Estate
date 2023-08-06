import React from 'react'
import { Carousel } from 'react-bootstrap'
import img from '../img/bgimg.jpg'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'
import img5 from '../img/img5.jpg'
import img6 from '../img/img6.jpg'
import img7 from '../img/img7.jpg'
import img8 from '../img/img8.jpg'
import img9 from '../img/img9.jpg'
import img10 from '../img/img10.jpg'


function Gallery() {
    return (
        <div className='text-center text-white py-5' style={{ backgroundColor: "#3c3c3c" }} id='gallery'>
            <h1>Gallery</h1>
            <Carousel fade className='px-5 pt-2'>
                <Carousel.Item>
                    <img src={img} alt='img' style={{width:"90vw", height:"auto"}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img4} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img5} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img6} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img7} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img8} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img9} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img10} alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Gallery