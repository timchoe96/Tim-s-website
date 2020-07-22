import React from 'react';
import home from './images/home.png';

const Home = () => {
    return(
      
        <div className='home'>
              {/* home folder  */}
              <div className='homeFolder'>
                <img alt='' src={home}></img>
                <div>Home</div>
            </div>
            {/* finder folder */}
            <div className='finderOpen'> 
                <div className='topFinder'>
                </div>
                <div className='bottomFinder'>
                    <div className='leftFinder'>

                    </div>
                    <div className='rightFinder'>

                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Home;