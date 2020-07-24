import React from 'react';
import home from './images/home.png';
import Rightfinderhome from '../Rightfinderhome/Rightfinderhome';
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
                        <img alt='' src={home}></img>
                        <div>Home</div>
                    </div>
                </div>
                <div className='bottomFinder'>
                   <Leftfinder Home={'#d7d6d6'} Docs={''}/>
                   <Rightfinderhome/>
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