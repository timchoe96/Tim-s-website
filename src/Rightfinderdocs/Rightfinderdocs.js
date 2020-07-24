import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import blank from './images/blank.png';
import {Link} from 'react-router-dom';

const Rightfinderdocs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.getData)
    
  
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
    

    return(
             <div className='rightFinderdocs'>
                 {blogs.map((blog,id) => <Link style={{textDecoration:'none'}}key={id} to={`/Documents/${id}`}>
                     <div key={id} className='blogDoc'>
                         <img src={blank} alt=''></img>
                        <div>{`${blog.title}.doc`}</div>
                     </div>
                      </Link> )}
            </div>
      
    )
}

export default Rightfinderdocs;