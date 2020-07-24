import React from 'react';
import about from './images/about.png';
import documents from './images/documents.png';
import pictures from './images/pictures.png';
import soon from './images/soon.png';
import {Link} from 'react-router-dom';





const Rightfinderhome = () => {
    return(
             <div className='rightFinderhome'>
                <div className='rightTop'>
                    <div className='about'>
                        <img src={about} alt=''></img>
                        <div>About.doc</div>
                    </div>
                    <div className='documents'>
                        <Link to='/Documents'>
                            <img src={documents} alt=''></img>
                        </Link>
                        <div>Documents</div>
                    </div>
                    <div className='pictures'>
                        <img src={pictures} alt=''></img>
                        <div>Pictures.png</div>
                    </div>
                    <div className='soon'>
                        <img src={soon} alt=''></img>
                        <div>Soon.doc</div>
                    </div>
                </div>
            </div>
      
    )
}

export default Rightfinderhome;