import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/1.jpg'
import BoraBora2 from '../../assets/2.jpg'
import Maldives from '../../assets/6.jpg'
import Maldives2 from '../../assets/4.jpg'
import KeyWest from '../../assets/5.jpg'
import stars from '../../assets/stars.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
            <div className="pic">
            <img src={stars} alt="/"/>
            </div>
            
                <h1>Vi erbjuder mängder av <br></br>olika All-Inclusive alternativ</h1>
                
                <h3><em>Kriminalvården gjorde allt och lite till för mig!</em></h3>
                <em> - Jarmo ,45år</em> <br>

                </br>
                <h3><em>Som en ständig kund gör dem mig aldrig missnöjd!</em></h3>
                <em> - Chrille, 29år</em>
             
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={BoraBora} alt="/"/>
                    <img src={BoraBora2} alt="/"/>
                    <img src={Maldives} alt="/"/>
                    <img src={Maldives2} alt="/"/>
                    <img src={KeyWest} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
