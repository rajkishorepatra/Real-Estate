import React from 'react'
import { Carousel } from 'react-bootstrap'


function Gallery() {
    return (
        <div className='text-center text-white py-5' style={{ backgroundColor: "#3c3c3c" }} id='gallery'>
            <h1>Gallery</h1>
            <Carousel fade className='px-5 pt-2'>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img1-min_uTkS_Gop-.jpg?updatedAt=1691328866104' alt='img' style={{width:"90vw", height:"auto"}}/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img6-min_RdeWSVUWP.jpg?updatedAt=1691328870650' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img7-min_XsfTBuRDh.jpg?updatedAt=1691328875530' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img9-min__f8pFbhSg.jpg?updatedAt=1691328895243' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/bgimg-min_528sltV8z.jpg?updatedAt=1691328914968' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img8-min_58xPoNEcU.jpg?updatedAt=1691328916145' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img5-min_AAqipZ-ST.jpg?updatedAt=1691328916607' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img4-min_vIerLFijD.jpg?updatedAt=1691328926897' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img2-min_xyAS6yTS7.jpg?updatedAt=1691328955852' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img3-min_YdYMk0m8VE.jpg?updatedAt=1691328956673' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://ik.imagekit.io/dqe4fvjcky/H2_Square/img10-min_o-eOuqMSzC.jpg?updatedAt=1691328959541' alt='img' style={{width:"90vw", height:"auto"}} />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Gallery