import React from 'react';
import ex from './images/ex.png';
import minus from './images/minus.png';
import expand from './images/expand.png';
import arrowLeft from './images/arrowLeft.png';
import arrowRight from './images/arrowRight.png';
import {Link} from 'react-router-dom';

const Control = () => {
 return(
    <div className='control'>
        <div className='colorButtons'>
            <Link to='/'>
                <div className='redButton'>
                    <img alt='' src={ex}></img>
                </div>
            </Link>
            <Link to='/'>
                <div className='yellowButton'>
                    <img  alt='' src={minus}></img>
                </div>
            </Link>
            <div className='greenButton'>
                <img  alt='' src={expand}></img>
            </div>
        </div>
    <div className='backForward'>
        <Link to='/Home'>
            <div className='back'>
                <img alt='' src={arrowLeft}></img>
            </div>
        </Link>
        <div className='forward'>
            <img alt='' src={arrowRight}></img>
        </div>
    </div>
</div>
 )
}

export default Control;