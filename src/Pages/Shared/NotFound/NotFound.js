import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div  className='container'>
        <img src="https://relaxed-northcutt-57de90.netlify.app/images/no-result-found.webp" alt="" />
     <div className='button'>
     <Link to='/home'> <button className='btn btn-primary'> Go Hone </button></Link>
     </div>
      
        </div>
    );
};

export default NotFound;