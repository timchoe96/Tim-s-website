import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {displayAlert} from '../actions/index.js';
import blank from './images/blank.png';
import doc from './images/doc.png';





const Rightfinderhome = () => {

    const dispatch = useDispatch();
    return(
             <div className='rightFinderhome'>
                <div className='rightTop'>
                    <div className='about'>
                        <Link to='/About'>
                            <img src={blank} alt=''></img>
                        </Link>
                        <div>About.doc</div>
                    </div>
                    <div className='documents'>
                        <Link to='/Documents'>
                            <img src={doc} alt=''></img>
                        </Link>
                        <div>Documents</div>
                    </div>
                    <div className='pictures'>
                        <Link to='/Pictures'>
                            <img src={blank} alt=''></img>
                        </Link>
                        <div>Pictures.png</div>
                    </div>
                    <div className='soon' style={{cursor:'pointer'}}>
                        <img src={blank} alt='' onClick={()=> dispatch(displayAlert('block'))}></img>
                        <div>Soon.doc</div>
                    </div>
                </div>
            </div>
    )
}

export default Rightfinderhome;