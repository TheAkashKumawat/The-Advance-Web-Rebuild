import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import BlogImg from '../../assets/images/construction3.jpg';
import BlogImg2 from '../../assets/images/blog2.jpg';
import BlogImg3 from '../../assets/images/blog3.jpg';

const Blogs = () => {
    return (
        <>
            <Header />

            <main>
                <Hero preHeading={'Quality. Excellence. Precision.'}
                    heading={'Blogs & News'}
                    text={'We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.'} />
            </main>
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

            <Footer />
        </>
    )
}

export default Blogs
