import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const ContactUs = () => {
    return (
        <>
            <Header />

            <main>
                <Hero preHeading={'Quality. Excellence. Precision.'}
                    heading={'Contact Us'}
                    text={'We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.'} />
            </main>

            <section className='section-8 py-5'>
                <div className="container">
                    <div className='section-header text-center'>
                        <span></span>
                        <h2>Contact Us</h2>
                        <p>Our dedicated experts are here to help you with any of your questions, contact us by <br />
                            filling out the form below and we will be in touch shortly.</p>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-3">
                            <div className="card shadow border-0 mb-3">
                                <div className="card-body p-4">
                                    <h3>Call Us</h3>
                                    <div><a href='#'>01414005344</a></div>

                                    <h3 className='mt-4'>You can write us</h3>
                                    <div><a href='#'>info@thevisionhouse.in</a></div>

                                    <h3 className='mt-4'>Address</h3>
                                    <div>Plot No. 60 Khudabadi Sonara Marg Ram Mandir Rd,<br />Sindhi Colony, Bani Park <br />
                                        Jaipur, Rajasthan, 302016</div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <form action="">
                                        <div className="row">
                                            <div className='col-md-6 mb-4'>
                                                <label htmlFor="" className="form-label">Name</label>
                                                <input type="text" className='form-control form-control-lg' placeholder='Enter Your Name' />
                                            </div>

                                            <div className='col-md-6 mb-4'>
                                                <label htmlFor="" className="form-label">Email</label>
                                                <input type="text" className='form-control form-control-lg' placeholder='Enter Your Email' />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-md-6 mb-4'>
                                                <label htmlFor="" className="form-label">Phone</label>
                                                <input type="text" className='form-control form-control-lg' placeholder='Enter Your Number' />
                                            </div>

                                            <div className='col-md-6 mb-4'>
                                                <label htmlFor="" className="form-label">Subject</label>
                                                <input type="text" className='form-control form-control-lg' placeholder='Enter Your Query' />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="" className="form-label">Message</label>
                                            <textarea name="" id="" rows={5} className='form-control form-control-lg' placeholder='Enter Your Message'></textarea>
                                        </div>

                                        <button className='btn btn-primary large mt-4'>Submit</button>
                                        
                                    </form>
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

export default ContactUs
