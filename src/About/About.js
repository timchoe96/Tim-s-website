import React from 'react';
import Buttons from '../Buttons/Buttons';

const About = () => {
    return(
        <div className='about'>
            <Buttons title={'About.doc'} link='Home'/>
            <div className='words'>
                You can tell alot about a person by the contents of their computer.
            </div>
        </div>
    )
}

export default About;