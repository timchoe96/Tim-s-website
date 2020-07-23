import React from 'react';
import home from './images/home.png';
import {Link} from 'react-router-dom';

const Homefolder = () => {
    return(
        <div className='home'>
                 {/* home folder  */}
            <Link to='/Home'>
                <div className='homeFolder'>
                    <img alt='' src={home}></img>
                    <div>Home</div>
                </div>
            </Link>
        </div>
    )
}

export default Homefolder;