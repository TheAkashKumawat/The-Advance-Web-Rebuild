import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
    return (
        <section className='section-2 py-5'>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutImg} className='w-100' alt="About Us" />
                    </div>

                    <div className="col-md-6">
                        <span>About Us</span>
                        <h2>A Service Trade Business Group</h2>
                        <p>The Vision House is trusted for delivering reliable results across Infrastructure Development,Supply Chain Solutions,R&D Projects and Business Development Consultancy.Our reputation is built on consistently meeting client expectations with precision.</p>

                        <p>With deep industry experience and a culture of continuous improvement,we enhance efficiency on every project. Backed by over 500 skilled professionals and agile management,we deliver solutions that combine structure,flexibility and lasting value.</p>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About
