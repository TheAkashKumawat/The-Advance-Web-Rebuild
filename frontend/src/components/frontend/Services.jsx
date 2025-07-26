import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ConstructionImg from '../../assets/images/construction2.jpg';
import PackagingImg from '../../assets/images/packaging.jpg';
import DesignImg from '../../assets/images/design.jpg';
import ManagementImg from '../../assets/images/management.jpg';
import TelecommunicationImg from '../../assets/images/telecommunication.jpg';
import LogisticsImg from '../../assets/images/logistic.jpg';
import FreightImg from '../../assets/images/freight.jpg';
import SurveyImg from '../../assets/images/survey.png';

const Services = () => {
    return (
        <>
            <Header />
            <Hero preHeading={'Quality. Excellence. Precision.'}
                heading={'Services'}
                text={'We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.'} />
            <section className='section-3 bg-light py-5'>
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Our Services</span>
                        <h3>Our Engineering, Supply Chain and Management Services</h3>
                        <p>We offer integrated services in Industrial construction, Design and Consultancy, Packaging, Telecommunications,<br />Project management, Logistics, Freight forwarding, and Topographical and Geological surveys.</p>
                    </div>

                    <div className="row pt-4">
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ConstructionImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Industrial Construction</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Industrial construction is a specialized sector within the
                                            construction industry that focuses on the design, development, and
                                            construction of facilities for industrial use.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={PackagingImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Packaging Solution</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Packaging solutions is a specialized area within the supply chain industry that focuses on the design, development, and delivery of materials for product protection and distribution.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={DesignImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Design and Consultancy</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Design and consultancy is a specialized field within the service industry that focuses on the planning, strategy, and guidance for the development and execution of various projects.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ManagementImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Project Management</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Project management is a specialized discipline within the business industry that focuses on the planning, coordination, and execution of tasks to achieve specific project goals efficiently.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={TelecommunicationImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Telecommunication</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Telecommunication is a specialized sector within the technology industry that focuses on the transmission, reception, and management of data over long distances through various communication systems.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={LogisticsImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Logistics</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Logistics is a specialized function within the supply chain industry that focuses on the planning, movement, and coordination of goods to ensure efficient storage and timely delivery.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={FreightImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Freight forwarding</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Freight forwarding is a specialized service within the logistics industry that focuses on the arrangement, coordination and shipment of goods across international and domestic transportation networks.
                                        </p>
                                    </div>
                                    <a href="#" className="btn btn-primary small">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 ">
                            <div className="item">
                                <div className="service-image">
                                    <img src={SurveyImg} alt="service-img" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Topographical and Geological Survey</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Topographical and geological survey is a specialized practice within the surveying industry that focuses on the measurement, analysis and mapping of land features for development planning.
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

export default Services
