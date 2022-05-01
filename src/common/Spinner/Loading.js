import React from 'react';
import './Loading.css';
import {Spinner} from 'react-bootstrap';
const Loading = () => {
    return (
        <div className='container loading'>
              <Spinner animation="border" variant="dark" />
        </div>
    );
};

export default Loading;