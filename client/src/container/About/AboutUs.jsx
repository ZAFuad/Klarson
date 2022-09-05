import React from 'react'
import images from '../../constants/images'
import './About.css'


const AboutUs = () => {
    return (
        <div className="a-container">
            <div className="a-wrapper">
                <div className="a-left">
                    <img src={images.about} classname="a1-image" alt='' />
                </div>
                <div className="a-right">
                <h1 className='section-title'>About Us</h1>
                    <p className='a-text'>
                    Klarson is one of the first furniture brands in Bangladesh to expand globally. Today, this multinational company is proudly representing Bangladeshi furniture in countries like Canada, Australia, USA, Kuwait, UAE, Saudi Arabia, Russia, Egypt, Thailand, India, Nepal, and Bhutan.
Built upon the trust of millions of customers, Klarson has provided premium quality furniture since 1989. Manufactured with the best quality timber, the modern and stylish designed furniture are a signature of elegance and comfort.
So if you are looking to buy the finest quality of furniture, look no further than Klarson. With its wide range of designs and affordable pricing, Klarson has managed to cater to even the most meticulous shopper.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;