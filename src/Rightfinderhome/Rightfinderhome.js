import React from 'react';
import about from './images/about.png';
import documents from './images/documents.png';
import pictures from './images/pictures.png';
import soon from './images/soon.png';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {displayAlert} from '../actions/index.js';





const Rightfinderhome = () => {

    const dispatch = useDispatch();
    return(
             <div className='rightFinderhome'>
                <div className='rightTop'>
                    <div className='about'>
                        <Link to='/About'>
                            <img src={about} alt=''></img>
                        </Link>
                        <div>About.doc</div>
                    </div>
                    <div className='documents'>
                        <Link to='/Documents'>
                            <img src={documents} alt=''></img>
                        </Link>
                        <div>Documents</div>
                    </div>
                    <div className='pictures'>
                        <Link to='/Pictures'>
                            <img src={pictures} alt=''></img>
                        </Link>
                        <div>Pictures.png</div>
                    </div>
                    <div className='soon' style={{cursor:'pointer'}}>
                        <img src={soon} alt='' onClick={()=> dispatch(displayAlert('block'))}></img>
                        <div>Soon.doc</div>
                    </div>
                </div>
            </div>
      
    )
}

export default Rightfinderhome;