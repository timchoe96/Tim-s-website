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

    function title(){
        if(typeof blog[number]==='undefined'){
            return null
        }else{
            return parse(blog[number].title)
        }
       }
    

    return(
        <div className='blog'>
        <Buttons title={`${title()}.doc`} link='Documents'/>
            <div className='content'>
                <div className='page'> 
                    {checkRender()}
                </div>
            </div>
        </div>  
    )
}

export default Blog;