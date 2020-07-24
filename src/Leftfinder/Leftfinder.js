import React from 'react';
import doc from './images/doc.png';
import home from './images/home.png';
import {Link} from 'react-router-dom';

const Leftfinder = ({Home,Docs}) => {
    return(
        <div className='leftFinder'>
            <div className='leftGroup'>
                <div className='favoriteGroup'>
                    <div>
                        <strong>Favorites</strong>
                    </div>
                    <Link to='/Home' style={{ textDecoration: 'none' }}>
                        <div className='homeFavorite' style={{backgroundColor:Home}}>
                            <img alt='' src={home}></img>
                            <div>Home</div>
                        </div>
                    </Link>
                    <Link to='/Documents' style={{ textDecoration: 'none' }}>
                        <div className='docFavorite' style={{backgroundColor:Docs}}>
                            <img alt='' src={doc}></img>
                            <div>Documents</div>
                        </div>
                    </Link>
                </div>
                <div className='cloud'>
                    <strong>iCloud</strong>
                </div>
                <div className='locations'>
                    <strong>Locations</strong>
                </div>
                <div className='tags'>
                    <strong>Tags</strong>
                </div>
            </div>
        </div>
    )
}

export default Leftfinder;