import React from 'react';
import noUrl from '../../asset/Not-found/noUrl.webp';
const NotFound = () => {
    return (
        <div className=' container text-center my-5'>
            <h3 className='text-primary'>No found url. </h3>
            <img className='w-50 h-auto' src={noUrl} alt="" />
        </div>
    );
};

export default NotFound;