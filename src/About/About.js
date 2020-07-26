import React from 'react';
import Buttons from '../Buttons/Buttons';

const About = () => {
    return(
        <div className='about'>
            <Buttons title={'About.doc'} link='Home'/>
            <div className='words'>
                Welcome to my computer. I keep my ideas and thoughts on here. Don't snoop around too much. 
            </div>
        </div>
    )
}

export default About;