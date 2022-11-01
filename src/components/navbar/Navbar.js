import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <br></br>
                <h3>Är du en blivande fånge? Då har du kommit rätt!</h3>
                <h5><em>En produkt av Consid för blivande fångar</em> </h5>
            </div>
            
            <ul className="nav-menu">
           
                <Link to='home' smooth={true} duration={500} ><li>Hem</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Anstalter</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Kontakt</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>FAQ</li></Link>
                <br></br>
                <Link to='views' smooth={true} duration={500} ><li>Är du fånge sedan tidigare? Logga in här!</li></Link>
            </ul>
            
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
