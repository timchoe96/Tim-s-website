import React from 'react';
import documents from './images/documents.png';
import home from './images/home.png';
import Rightfinderdocs from '../Rightfinderdocs/Rightfinderdocs.js';
import Control from '../Control/Control';
import Leftfinder from '../Leftfinder/Leftfinder';


const Documents = () => {
    return(
   
        <div className='documents'>
            {/* finder folder */}
            <div className='finderOpen'> 
                <div className='topFinder'>
                    <Control/>
                    <div className='icon'>
                        <img alt='' src={documents}></img>
                        <div>Documents</div>
                    </div>
                </div>
                <div className='bottomFinder'>
                   <Leftfinder Home={''} Docs={'#d7d6d6'}/>
                   <Rightfinderdocs/>
                </div> 
            </div>
            <div className='homeFolder'>
                <img alt='' src={home}></img>
                <div>Home</div>
            </div>
        </div>
   
    )
}

export default Documents;