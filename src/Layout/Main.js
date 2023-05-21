import React from 'react';
import Header from '../Shared/Header/Header.js';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
          <Header ></Header>  
          <div className='mt-5'> 
          <Outlet ></Outlet>
          </div>
        </div>
    );
};

export default Main;