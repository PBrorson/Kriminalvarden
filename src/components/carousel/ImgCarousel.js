import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../../assets/1.jpg'
import BoraBora2 from '../../assets/2.jpg'
import Maldives from '../../assets/6.jpg'
import Pay from '../../assets/pay.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} alt='/' />
                    {/* <p className="legend">Maldives 1</p> */}
                </div>
                <div>
                    <img src={BoraBora2} alt='/' />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={Maldives} alt='/' />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            <div className="payment">
            <img src={Pay} alt='/'/>
            </div>
           
        </div>


    )
}

export default ImgCarousel
