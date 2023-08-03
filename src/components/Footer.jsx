import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

function Footer() {
    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div class="container m-0 p-0">

                {/* <!-- Footer --> */}
                <footer
                    class="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#1c2331", width: "100vw" }}
                >
                    {/* <!-- Section: Social media --> */}
                    <section
                        class="d-flex justify-content-between p-4"
                        style={{ backgroundColor: "#6351ce" }}
                    >
                        {/* <!-- Left --> */}
                        <div class="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        {/* <!-- Left --> */}

                        {/* <!-- Right --> */}
                        <div>
                            <a href="" class="text-white me-4">
                                <FaFacebook size={30} />
                            </a>
                            <a href="" class="text-white me-4">
                                <FaTwitter size={30} />
                            </a>
                            <a href="" class="text-white me-4">
                                <FaInstagram size={30} />
                            </a>
                            <a href="" class="text-white me-4">
                                <FaLinkedin size={30} />
                            </a>
                        </div>
                        {/* <!-- Right --> */}
                    </section>
                    {/* <!-- Section: Social media --> */}

                    {/* <!-- Section: Links  --> */}
                    <section class="p-2">
                        <div class="container text-start mt-5">
                            {/* <!-- Grid row --> */}
                            <div class="row mt-3">
                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* <!-- Content --> */}
                                    <h6 class="text-uppercase fw-bold">Company name</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* 
                                {/* <!-- Grid column --> */}
                                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* <!-- Links --> */}
                                    <h6 class="text-uppercase fw-bold">Contact</h6>
                                    <hr
                                        class="mb-4 mt-0 d-inline-block mx-auto"
                                        style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                    />
                                    <p><FaHome size={20} />&nbsp;&nbsp;New York, NY 10012, US</p>
                                    <p><FaEnvelope size={20} />&nbsp;&nbsp;info@example.com</p>
                                    <p><FaPhoneAlt size={20} />&nbsp;&nbsp;+ 01 234 567 88</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!-- Grid row --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Links  --> */}

                    {/* <!-- Copyright --> */}
                    <div
                        class="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    >
                        A Project by LEAFLETS(A UNIT OF IAMPIX TECHNOLOGY)
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
                {/* <!-- Footer --> */}

            </div>
            {/* <!-- End of .container --> */}
        </>
    )
}

export default Footer