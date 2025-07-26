import React from 'react'


import Header from '../common/Header';
import Footer from '../common/Footer';
import ConstructionImg from '../../assets/images/construction2.jpg';
import PackagingImg from '../../assets/images/packaging.jpg';
import DesignImg from '../../assets/images/design.jpg';
import ManagementImg from '../../assets/images/management.jpg';
import TelecommunicationImg from '../../assets/images/telecommunication.jpg';
import LogisticsImg from '../../assets/images/logistic.jpg';
import FreightImg from '../../assets/images/freight.jpg';
import SurveyImg from '../../assets/images/survey.png';
import CompImg1 from '../../assets/images/comp1.jpg';
import CompImg2 from '../../assets/images/comp2.jpg';
import CompImg3 from '../../assets/images/comp3.jpg';
import CompImg4 from '../../assets/images/comp4.jpg';
import CompImg5 from '../../assets/images/comp5.jpg';
import CompImg6 from '../../assets/images/comp6.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

import AvatarImg1 from '../../assets/images/a1.jpg';
import AvatarImg2 from '../../assets/images/a2.jpg';
import AvatarImg3 from '../../assets/images/a3.jpg';
import AvatarImg4 from '../../assets/images/a4.jpg';

import BlogImg from '../../assets/images/construction3.jpg';
import BlogImg2 from '../../assets/images/blog2.jpg';
import BlogImg3 from '../../assets/images/blog3.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import About from '../common/About';


const Home = () => {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className='section-1'>
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome The Vision House</span>
                <h1>Crafting dreams with <br />precision and excellence</h1>
                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br />attention to detail. With years of experience and a dedication to quality </p>
                <div className="mt-4 ">
                  <a className='btn btn-primary large'>Contact Now</a>
                  <a className='btn btn-secondary large ms-2'>View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <About />

        {/* { Services Section} */}
        <section className='section-3 bg-light py-5'>
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h3>Our Engineering, Supply Chain and Management Services</h3>
              <p>We offer integrated services in Industrial construction, Design and Consultancy, Packaging, Telecommunications,<br />Project management, Logistics, Freight forwarding, and Topographical and Geological surveys.</p>
            </div>

            <div className="row pt-4">
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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

        {/* {Why Choose Us Section} */}
        <section className='section-4 py-5'>
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects.</h2>
              <p>
                Created in close partnership with our clients and collaborators, this approach merges industry expertise,<br />
                decades of experience, innovation, and flexibility to consistently deliver excellence.
              </p>
            </div>

            <div className='row pt-4'>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className='card-icon'>
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Proven Expertise</h3>
                  </div>
                  <p>Years of experience across construction, consultancy, logistics, and engineering.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className='card-icon'>
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Integrated Solutions</h3>
                  </div>
                  <p>End-to-end services delivered through specialized group companies.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className='card-icon'>
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Reliable Execution</h3>
                  </div>
                  <p>A trusted team of 500+ professionals committed to quality and timely delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className='section-3 bg-light py-5'>
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Group Companies</span>
              <h3>Discover the right system that fulfils your business's need.</h3>
              <p>Our group companies work together to deliver integrated services.</p>
            </div>

            <div className="row pt-4">
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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
              <div className="col-md-3 col-lg-3 p-3">
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

        {/* Testimonials Section */}
        <section className='section-5 py-5'>
          <div className="container">
            <div className="section-header text-center">
              <span>Testimonials</span>
              <h3>What people are saying about us</h3>
            </div>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className='card shadow border-0 mx-auto my-4' style={{ maxWidth: '90%' }}>
                <div className="card-body p-5 text-center">
                  <div className="rating d-flex justify-content-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>

                  </div>
                  <div className="content pt-4 pb-2">
                    <p>
                      The Vision House has been providing post-construction services that provide peace of mind ensuring we remain by your side long after project completion.
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg1} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'> Shivani </div>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card shadow border-0 mx-auto my-4' style={{ maxWidth: '90%' }}>
                <div className="card-body p-5 text-center">
                  <div className="rating d-flex justify-content-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>

                  </div>
                  <div className="content pt-4 pb-2">
                    <p>
                      Working with The Vision House was seamless. From initial planning to the final touches, their team handled everything with expertise and transparency.
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg2} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'>Rohit Mehra</div>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card shadow border-0 mx-auto my-4' style={{ maxWidth: '90%' }}>
                <div className="card-body p-5 text-center">
                  <div className="rating d-flex justify-content-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>

                  </div>
                  <div className="content pt-4 pb-2">
                    <p>
                      Vision House managed our telecom setup during the build phase—structured cabling, server room design, and all IT essentials were done right the first time.
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg3} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'>Aman Desai </div>

                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='card shadow border-0 mx-auto my-4' style={{ maxWidth: '90%' }}>
                <div className="card-body p-5 text-center">
                  <div className="rating d-flex justify-content-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 
              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 
              0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 
              3.356.83 4.73c.078.443-.36.79-.746.592L8 
              13.187l-4.389 2.256z" />
                    </svg>

                  </div>
                  <div className="content pt-4 pb-2">
                    <p>
                      From planning to handover, The Vision House maintained clear communication and met every deadline. Their team is very reliable on-site.
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex meta'>
                    <div>
                      <img src={AvatarImg4} alt="" width={50} />
                    </div>
                    <div className='ps-3'>
                      <div className='name'>Aditya Verma</div>
                    </div>

                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </section>

        {/* Blog Section */}
        <section className='section-6 bg-light py-5'>
          <div className="container">
            <div className="section-header text-center">
              <span>Blog & News</span>
              <h3>Articles & Blog Posts</h3>
              <p>The Vision House is a trusted name in the construction industry.</p>
            </div>

            <div className="row pt-3 ">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className='card-img-top'>
                    <img src={BlogImg} alt="" className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Sustainability in Construction</a>
                    </div>
                    <a href="#" className='btn btn-primary large'>Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className='card-img-top'>
                    <img src={BlogImg2} alt="" className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Smart Construction</a>
                    </div>
                    <a href="#" className='btn btn-primary large'>Read More</a>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0">
                  <div className='card-img-top'>
                    <img src={BlogImg3} alt="" className='w-100' />
                  </div>
                  <div className='card-body p-4'>
                    <div className='mb-3'>
                      <a href='#' className='title'>Telecom Infrastructure</a>
                    </div>
                    <a href="#" className='btn btn-primary large'>Read More</a>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </section>







      </main>
      <Footer />
    </>
  )
}

export default Home
