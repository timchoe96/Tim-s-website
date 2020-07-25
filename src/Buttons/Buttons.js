import React from 'react';
import {Link} from 'react-router-dom';
import ex from './images/ex.png';
import minus from './images/minus.png';
import expand from './images/expand.png';

const Buttons = ({title}) => {
    return(
        <div className='Buttons'>
                <div className='title'>{`${title}.doc`}</div>
                <div className='colorButtons'>
                     <Link to='/Documents'>
                         <div className='redButton'>
                             <img alt='' src={ex}></img>
                         </div>
                    </Link>
                    <Link to='/Documents'>
                        <div className='yellowButton'>
                            <img  alt='' src={minus}></img>
                        </div>
                    </Link>
                    <div className='greenButton'>
                         <img  alt='' src={expand}></img>
                    </div>
                </div>     
        </div>
    )
}

export default Buttons;