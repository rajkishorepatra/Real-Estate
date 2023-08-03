import React from 'react'
import { FaHome } from 'react-icons/fa'
import { BiBuildingHouse } from 'react-icons/bi'
import { MdAddHomeWork } from 'react-icons/md'
import { IoMdPaper } from 'react-icons/io'
import { TbHomeSearch } from 'react-icons/tb'
import { RiHomeOfficeLine } from 'react-icons/ri'
import { Fade, Slide } from 'react-reveal'

function Content1() {
    return (
        <>
            <div className='my-5'>
                <Fade left>
                    <h1 className='text-center mt-5' style={{ fontSize: "1.9em", fontWeight: "bold" }}>Exclusive. Committed. Professional.</h1>
                </Fade>
                <Fade right>
                    <p className='text-center mt-3 px-5'>Utilizing her exceptional experience and knowledge of the luxury waterfront<br /> markets, Simone serves an extensive and elite worldwide client base.</p>
                </Fade>
                <div className='mx-4 mt-5 px-xl-5 px-4'>
                    <div className="d-flex cont1CardCont1">
                        <Fade left>
                            <div style={{ width: "25em" }} className='d-flex mx-3 cont1Card'>
                                <FaHome size={80} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>Sell your home</h3>
                                    <p>We do a free evaluation to be sure you want to start selling.</p>
                                </div>
                            </div>
                        </Fade>


                        <Slide bottom>
                            <div style={{ width: "25em" }} className='d-flex mx-3 cont1Card '>
                                <BiBuildingHouse size={80} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>Buy a home</h3>
                                    <p>We do a free evaluation to be sure you want to start selling.</p>
                                </div>
                            </div>
                        </Slide>


                        <Fade right>
                            <div style={{ width: "25em" }} className='d-flex mx-3 cont1Card '>
                                <MdAddHomeWork size={80} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>Home Inspection</h3>
                                    <p>We do a free evaluation to be sure you want to start selling.</p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="d-flex cont1CardCont1">
                        <Fade left>
                            <div style={{ width: "25em" }} className='d-flex mx-3 cont1Card '>
                                <IoMdPaper size={80} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>Legal services</h3>
                                    <p>We do a free evaluation to be sure you want to start selling.</p>
                                </div>
                            </div>
                        </Fade>


                        <Slide bottom>
                            <div style={{ width: "25em" }} className='d-flex mx-3 cont1Card '>
                                <TbHomeSearch size={80} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>Free Evaluation</h3>
                                    <p>We do a free evaluation to be sure you want to start selling.</p>
                                </div>
                            </div>
                        </Slide>


                        <Fade right>
                            <div style={{ width: "25em" }} className='d-flex mx-3 cont1Card '>
                                <RiHomeOfficeLine size={80} />
                                <div className='p-3'>
                                    <h3 style={{ fontSize: "1.3em", fontWeight: "bold" }}>Marketing Presentation</h3>
                                    <p>We do a free evaluation to be sure you want to start selling.</p>
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