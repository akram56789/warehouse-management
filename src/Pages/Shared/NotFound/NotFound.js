import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div >
      <div id='notfound' className='d-flex w-100  justify-content-center'>
        <img height={'350px'} src="https://relaxed-northcutt-57de90.netlify.app/images/no-result-found.webp" alt="" />
      </div>
      <div className='d-flex justify-content-center  '>
        <Link to='/home'>
          <button className='btn btn-danger mb-2'>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;