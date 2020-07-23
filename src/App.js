import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Homefolder from './Homefolder/Homefolder';
// import playboi from './playboi.mp3';
// import nature from './natureSounds.mp3';

const App = () => {


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
            </Switch>
        </div>
    </Router>
    )
        
}

export default App;