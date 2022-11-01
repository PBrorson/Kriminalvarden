import React from 'react'
import './HeroStyles.css'
import {AiOutlineSearch} from 'react-icons/ai'
import Krim from '../../assets/krim.jpg'
import Video from '../../assets/videoBg.mp4'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
            <img src={Krim} alt="/"/>
                <br></br>
                <h2>Från Ystad till Haparanda</h2>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Vart vill du sitta?' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
