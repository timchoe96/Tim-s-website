import React,{useEffect,useState} from 'react';
import Buttons from '../Buttons/Buttons';


const Pictures = () => {

const [feed,setFeed] = useState([]);

    useEffect(()=> {
        fetch(`https://api.tumblr.com/v2/blog/t:ludyybtv8EyHxeJzIanq3w/posts?api_key=1K5kBBtN3I6XMgfAB6qU4kQieFrKuz2abpFw21YxeauKQcUW2s`).then(res => res.json()).then(data => setFeed(data.response.posts));  
    },[])

   

    console.log(feed);


return (
        <div className='pictures'> 
          <Buttons title={'Pictures.png'} link='Home'/>
          <div className='posts'>
                    {
            feed.map((url,i) => <div className='flexchild'><img key={i} src={url.link_url} alt=''></img></div>)
                        }
          </div>
  
        </div>
    )
        
}

export default Pictures;