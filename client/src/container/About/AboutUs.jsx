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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit vero quisquam libero laudantium. Minima assumenda enim eaque. Ullam, dolorum eveniet molestiae animi quo consequuntur distinctio optio vel architecto nulla!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;