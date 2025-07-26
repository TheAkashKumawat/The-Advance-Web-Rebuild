import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Hero from '../common/Hero'
import CompImg1 from '../../assets/images/comp1.jpg';
import CompImg2 from '../../assets/images/comp2.jpg';
import CompImg3 from '../../assets/images/comp3.jpg';
import CompImg4 from '../../assets/images/comp4.jpg';
import CompImg5 from '../../assets/images/comp5.jpg';
import CompImg6 from '../../assets/images/comp6.jpg';


const GroupComp = () => {
    return (
        <>
            <Header />

            <main>
                <Hero preHeading={'Quality. Excellence. Precision.'}
                    heading={'Group Companies'}
                    text={'We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.'} />
            </main>

            <section className='section-3 bg-light py-5'>
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Our Group Companies</span>
                        <h3>Discover the right system that fulfils your business's need.</h3>
                        <p>Our group companies work together to deliver integrated services.</p>
                    </div>

                    <div className="row pt-4">
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={CompImg1} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>The Vision House (Infra)</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Founded in 2004, focusing on infrastructure needs for telecom, highways, public sector, etc.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={CompImg2} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Vision Trade Solutions Pvt. Ltd.</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Established in 2006, specializing in packing, warehousing, and seamless goods flow.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={CompImg3} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Vision Freight Solutions Pvt. Ltd.</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Founded in 2008 (ISO 9001:2008 certified), offering integrated logistics solutions.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={CompImg4} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Vision Farm Pvt. Ltd.</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            The foundation is focused on carrying out research by involving grass root beneficiaries for sustainable agriculture development.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={CompImg6} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Vinod Carriers Pvt. Ltd.</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Vision Carriers provides pick-up and delivery of cargo to and from factory to warehouse or ICD/ CFS / Port / Airport.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={CompImg5} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>The Catalyst</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Name of The Catalyst is known for Information Technology Services and Solutions.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default GroupComp

