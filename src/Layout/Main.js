import React from 'react';
import Header from '../Shared/Header/Header.js';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer.js';
import { Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        
          <di>
            <Header ></Header>  
          
          <div>
          <Outlet ></Outlet>
          </div>
        
          
          <div>
          <Footer ></Footer>
          </div>
          </di>
         
       
    );
};

export default Main;