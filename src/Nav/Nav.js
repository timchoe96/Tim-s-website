import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import apple from './images/apple.png';
import search from './images/search.png';
import battery from './images/battery.png';
import menu from './images/menu.png';
import wifi from './images/wifi.png';
import {timeChange} from '../actions/index.js';



const Nav = () => {
    const dispatch = useDispatch();
    const time = useSelector( state => state.time)
    let macTime ; 


    function getTime(){
    let today = new Date();
    let day = today.getDay();
    let minutes  = today.getMinutes().toString().length === 1 ? '0'+today.getMinutes() : today.getMinutes();
    let hours = today.getHours().toString().length === 1 ? today.getHours() : today.getHours()-12;
    function realHours (){ 
        if(hours === 0){
        return '12'}else{
           return hours
        }
    }   
    let ampm = today.getHours() >= 12 ? 'PM' : 'AM';
    let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return macTime = `${days[day]} ${realHours()}:${minutes} ${ampm}`;
    }

    useEffect(()=>{
        setInterval(() => { 
        getTime() 
        dispatch(timeChange(macTime))
    }, 500)
    })
    
    return(
        <div>
            <nav>
                {/* top left of navbar */}
                <div className='leftNav'>
                    <img alt='' src={apple}></img>
                    <div className='finder'><strong>Finder</strong></div>
                    <div className='mediumGone'>Edit</div>
                    <div className='mediumGone'>View</div>
                    <div className='mediumGone'>Go</div>
                    <div className='mediumGone'>Window</div>
                   <div>Home</div>
                </div>
                {/* top right of navbar */}
                <div className='rightNav'>
                    <img className='smallGone' src={wifi} alt=''></img> 
                    <div className='battery'>
                        <div>50%</div>
                        <img src={battery} alt=''></img> 
                    </div>
                    <div>{time}</div>
                    <img className='search' src={search} alt=''></img>   
                    <img src={menu} alt=''></img> 
                </div>
            </nav>
        </div>
    )
}

export default Nav;