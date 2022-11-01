import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/1.jpg'
import BoraBora2 from '../../assets/2.jpg'
import Maldives from '../../assets/1.jpg'
import Maldives2 from '../../assets/4.jpg'
import Maldives3 from '../../assets/5.jpg'
import KeyWest from '../../assets/6.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={BoraBora} text='Kumla' />
                <SelectsImg bgImg={BoraBora2} text='Täby' />
                <SelectsImg bgImg={Maldives} text='Saltvik' />
                <SelectsImg bgImg={Maldives2} text='Hall' />
                <SelectsImg bgImg={Maldives3} text='Gruvberget' />
                <SelectsImg bgImg={KeyWest} text='Färingsö' />
            </div>

        </div>
    )
}

export default Selects
