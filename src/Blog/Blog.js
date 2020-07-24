import React from 'react';
import Buttons from '../Buttons/Buttons';
import {useSelector} from 'react-redux';
import parse from 'html-react-parser';

const Blog = ({match}) => {

const number = match.params.id;
const blog = useSelector(state => state.getData);
    
   function checkRender(){
       if(typeof blog[number]==='undefined'){
           return null
       }else{
           return parse(blog[number].content)
       }
      }

//    console.log(checkRender());
    

    return(
        <div className='blog'>
        <Buttons/>
            <div className='content'>
                {checkRender()}
            </div>
        </div>  
    )
}

export default Blog;