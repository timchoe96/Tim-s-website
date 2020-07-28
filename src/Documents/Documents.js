import React from 'react';
import doc from './images/doc.png';
import Rightfinderdocs from '../Rightfinderdocs/Rightfinderdocs.js';
import Control from '../Control/Control';
import Leftfinder from '../Leftfinder/Leftfinder';
import {Link} from 'react-router-dom';


const Documents = () => {
    return(
   
        <div className='documents'>
            {/* finder folder */}
            <div className='finderOpen'> 
                <div className='topFinder'>
                    <Control/>
                    <div className='icon'>
                        <img alt='' src={doc}></img>
                        <div>Documents</div>
                    </div>
                </div>
                <div className='bottomFinder'>
                   <Leftfinder Home={''} Docs={'#d7d6d6'}/>
                   <Rightfinderdocs/>
                </div> 
            </div>
            <Link to='/Home'>
                <div className='homeFolder'>
                    <img alt='' src={doc}></img>
                    <div>Home</div>
                </div>
            </Link>
        </div>
   
    )
}

export default Documents;