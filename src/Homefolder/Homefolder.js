import React from 'react';
import {Link} from 'react-router-dom';
import doc from './images/doc.png';

const Homefolder = () => {
    return(
        <div className='home'>
                 {/* home folder  */}
            <Link to='/Home'>
                <div className='homeFolder'>
                    <img alt='' src={doc}></img>
                    <div>Home</div>
                </div>
            </Link>
        </div>
    )
}

export default Homefolder;