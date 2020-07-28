import React from 'react';
import Rightfinderhome from '../Rightfinderhome/Rightfinderhome';
import Control from '../Control/Control';
import Leftfinder from '../Leftfinder/Leftfinder';
import alert from './images/alert.png';
import {useDispatch,useSelector} from 'react-redux';
import {displayAlert} from '../actions/index.js';
import doc from './images/doc.png';


const Home = () => {
    const dispatch = useDispatch();
    const display = useSelector(state => state.display);

    return(
   
        <div className='home'>
            {/* finder folder */}
            <div className='finderOpen'> 
                <div className='topFinder'>
                    <Control/>
                    <div className='icon'>
                        <img alt='' src={doc}></img>
                        <div>Home</div>
                    </div>
                </div>
                <div className='bottomFinder'>
                   <Leftfinder Home={'#d7d6d6'} Docs={''}/>
                   <Rightfinderhome/>
                </div> 
                {/* start alert box */}
                <div className='soonAlert' style={{display:display}}>
                    <div className='topAlert'>

                    </div>
                    <div className='bottomAlert'>
                        <div className='top'>
                            <img alt='' src={alert}></img>
                            <div className='error'>
                                <h3>Error</h3>
                                <div className='text'>The document you are trying to access cannot be reached. Try accessing later after update has been completed.</div>
                            </div>
                        </div>
                        <button onClick={()=> dispatch(displayAlert('none'))}>Close</button>
                    </div>
                 </div>
                 {/* end alert box */}
            </div>
            <div className='homeFolder'>
                <img alt='' src={doc}></img>
                <div>Home</div>
            </div>
        </div>
    )
}

export default Home;