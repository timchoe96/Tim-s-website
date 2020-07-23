import React from 'react';
import doc from './images/doc.png';
import home from './images/home.png';

const Leftfinder = () => {
    return(
        <div className='leftFinder'>
            <div className='leftGroup'>
                <div className='favoriteGroup'>
                    <div>
                        <strong>Favorites</strong>
                    </div>
                    <div className='homeFavorite'>
                        <img alt='' src={home}></img>
                        <div>Home</div>
                    </div>
                    <div className='docFavorite'>
                        <img alt='' src={doc}></img>
                        <div>Documents</div>
                    </div>
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