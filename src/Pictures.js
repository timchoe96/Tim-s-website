import React,{useEffect,useState} from 'react';

const Pictures = () => {

const [feed,setFeed] = useState([]);

    useEffect(()=> {
        fetch(`https://graph.instagram.com/me?fields=media&access_token=IGQVJXaDdsWnQ1am42V1ByeENZAcDRnS29OdF9ncUkzZAWtFYUtoTjFJM0w3N093X0hJV004RjZAkMEQyZAndPNEM0SVRxTTBQR1o2dE9rRG5uZAG51eVozdmsxRTVLLThLQ2pmclkzcUZATaVhPcURyN0RENAZDZD`)
        .then(resp => resp.json()) 
        .then(data => data.media.data
        .forEach(imageID => fetch(`https://graph.instagram.com/${imageID.id}?fields=media_url&access_token=IGQVJXaDdsWnQ1am42V1ByeENZAcDRnS29OdF9ncUkzZAWtFYUtoTjFJM0w3N093X0hJV004RjZAkMEQyZAndPNEM0SVRxTTBQR1o2dE9rRG5uZAG51eVozdmsxRTVLLThLQ2pmclkzcUZATaVhPcURyN0RENAZDZD`)
        .then(res => res.json())
        .then(url => setFeed((prevState)=>[...prevState,url.media_url]))
        ));     
    },[])


return (
        <div> 
            {
feed.map((url,i) => <img key={i} src={url} alt=''></img>)
            }
        </div>
    )
        
}

export default Pictures;