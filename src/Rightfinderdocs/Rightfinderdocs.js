import React from 'react';
import {useSelector} from 'react-redux';
import blank from './images/blank.png';
import {Link} from 'react-router-dom';

const Rightfinderdocs = () => {
    const blogs = useSelector(state => state.getData)

    // const test = [{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'},{title:'hello'}]
   
    
    return(
             <div className='rightFinderdocs'>
                 {blogs.map((blog,id) => <Link style={{textDecoration:'none'}}key={id} to={`/Documents/${id}`}>
                     <div key={id} className='blogDoc'>
                         <img src={blank} alt=''></img>
                        <div>{`${blog.title}.doc`}</div>
                     </div>
                      </Link> )}
                      {/* {test.map((blog,id) => <Link style={{textDecoration:'none'}}key={id} to={`/Documents/${id}`}>
                     <div key={id} className='blogDoc'>
                         <img src={blank} alt=''></img>
                        <div>{`${blog.title}.doc`}</div>
                     </div>
                      </Link> )} */}
            </div>
      
    )
}

export default Rightfinderdocs;