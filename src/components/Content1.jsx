import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BiBuildingHouse } from 'react-icons/bi'
import { MdAddHomeWork } from 'react-icons/md'
import { BsHouseCheck,BsHouseAdd } from 'react-icons/bs'
import { TbHomeSearch } from 'react-icons/tb'
import { Fade, Slide } from 'react-reveal'

function Content1() {
    return (
        <>
            <div className='py-4 text-white' style={{ backgroundColor: "#3c3c3c", marginTop:"-1em"}}>
                {/* <Fade left>
                    <h1 className='text-center mt-5' style={{ fontSize: "1.9em", fontWeight: "bold" }}>Exclusive. Committed. Professional.</h1>
                </Fade>
                <Fade right>
                    <p className='text-center mt-3 px-5'>Utilizing her exceptional experience and knowledge of the luxury waterfront<br /> markets, Simone serves an extensive and elite worldwide client base.</p>
                </Fade> */}
                <div className='m-4 px-xl-5 px-4'>
                    <div className="d-flex cont1CardCont1">
                        <Fade left>
                            <div style={{ width: "25em" }} className='text-center m-3'>
                                <BsHouseAdd size={60} />
                                <div className='p-2'>
                                    <h3 style={{ fontSize: "1.3em"}}>40 + Life Style Amenities</h3>
                                </div>
                            </div>
                        </Fade>


                        <Slide bottom>
                            <div style={{ width: "25em" }} className='text-center m-3'>
                                <BiBuildingHouse size={60} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em"}}>Elite 2,3,3.5,4.5 BHK Apartments
                                    </h3>
                                </div>
                            </div>
                        </Slide>


                        <Fade right>
                            <div style={{ width: "25em" }} className='text-center m-3'>
                                <MdAddHomeWork size={60} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em"}}>262 units</h3>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="d-flex cont1CardCont1">
                        <Fade left>
                            <div style={{ width: "25em" }} className='text-center m-3'>
                                <BsHouseCheck size={60} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em"}}>Integrated G+2 Commercial</h3>
                                </div>
                            </div>
                        </Fade>


                        <Slide bottom>
                            <div style={{ width: "25em" }} className='text-center m-3'>
                                <TbHomeSearch size={60} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em" }}>3 Blocks 14 / 15 Storied</h3>
                                </div>
                            </div>
                        </Slide>


                        <Fade right>
                            <div style={{ width: "25em" }} className='text-center m-3'>
                                <FaHome size={60} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em" }}>2.2 acres Spacious</h3>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content1