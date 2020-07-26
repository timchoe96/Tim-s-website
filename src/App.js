import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Documents from './Documents/Documents';
import Homefolder from './Homefolder/Homefolder';
import Pictures from './Pictures/Pictures';
import About from './About/About';
// import playboi from './playboi.mp3';
// import nature from './natureSounds.mp3';
import Blog from './Blog/Blog';
const App = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const getData = () => {
            fetch(`https://www.googleapis.com/blogger/v3/blogs/9085604028025620950/posts?key=AIzaSyChWrKyLjsVyYj42CKBstkjrOnKWwPLqDs`)
              .then(resp => resp.json())
              .then(data => dispatch({
                    type: "FETCH_DATA",
                    payload: data.items}));
              };
        dispatch(() => getData());
      },[dispatch]);


return (
    <Router>
        {/* <audio controls='' autoplay='true'>
        <source src={nature} type="audio/mpeg">
        </source>
        </audio> */}
        <div className='App'> 
            <Nav></Nav>
            <Switch>
                <Route path='/' exact component={Homefolder}></Route>
                <Route path='/Home' exact component={Home}></Route>
                <Route path='/Documents' exact component={Documents}></Route>
                <Route path='/Documents/:id' exact component={Blog}></Route>
                <Route path='/Pictures' exact component={Pictures}></Route>
                <Route path='/About' exact component={About}></Route>
            </Switch>
        </div>
    </Router>
    )
        
}

export default App;