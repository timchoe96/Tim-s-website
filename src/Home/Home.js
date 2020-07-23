import React from 'react';
import home from './images/home.png';
import Rightfinder from '../Rightfinder/Rightfinder';
import Control from '../Control/Control';
import Leftfinder from '../Leftfinder/Leftfinder';


const Home = () => {
    return(
   
        <div className='home'>
            {/* finder folder */}
            <div className='finderOpen'> 
                <div className='topFinder'>
                    <Control/>
                    <div className='icon'>
                        <img src={home}></img>
                        <div>Home</div>
                    </div>
                </div>
                <div className='bottomFinder'>
                   <Leftfinder/>
                   <Rightfinder/>
                </div> 
            </div>
            <div className='homeFolder'>
                <img alt='' src={home}></img>
                <div>Home</div>
            </div>
        </div>
   
    )
}

export default Home;