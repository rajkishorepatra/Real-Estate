import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <footer
                class="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}
            >
                <section
                    class="d-flex justify-content-between p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    <div class="me-5">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/people/Harshpriya-Group/100091913771437/" class="text-white me-4">
                            <FaFacebook size={30} />
                        </a>
                        <a href="" class="text-white me-4">
                            <FaTwitter size={30} />
                        </a>
                        <a href="https://www.instagram.com/harshpriyaofficial/" class="text-white me-4">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://www.linkedin.com/company/harshpriya-group" class="text-white me-4">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </section>
                <section class="p-2">
                    <div class="container text-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold">HP Square</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                HP Square – the perfect square at Delta Square is a flagship project of Harshpriya Group, the pioneer of the real estate industry in Odisha standing.
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    class="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p><FaHome size={20} />&nbsp;&nbsp;Plot No. 542, Mahadev Tower, Service Road S, Saheed Nagar, Bhubaneswar-751007, Odisha</p>
                                <p><FaEnvelope size={20} />&nbsp;&nbsp;sales@harshpriyaconstructions.com</p>
                                <p><FaPhoneAlt size={20} />&nbsp;&nbsp;+91-7317316764</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    class="text-center p-3 text-white"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    A Project by <a href='https://www.instagram.com/leaflets_app/' style={{textDecoration:"none"}}>LEAFLETS</a> (A UNIT OF IAMPIX TECHNOLOGY)
                </div>
            </footer>
        </>
    )
}

export default Footer