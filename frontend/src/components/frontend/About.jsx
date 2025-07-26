import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import{default as AboutNew} from '../common/About';
import Hero from '../common/Hero';

const About = () => {
    return (
        <>
            <Header />
            <main> {/* Hero Section */}
                <Hero preHeading={'Quality. Excellence. Precision.'} 
                heading={'About Us'} 
                text={'We excel at transforming visions into reality through outstanding craftsmanship and precise attention to detail.'}/>
                <AboutNew />

                

                </main>
            <Footer />
        </>
    );
};

export default About;
