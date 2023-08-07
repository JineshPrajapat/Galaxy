import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import MotionWrap from '../../wrapper/MotionWrap';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';

function Header() {

      const { isLoggedIn } = useAuth();
      // console.log('loggedIn:',isLoggedIn);

      function navbarToggle() {
            var x = document.getElementById("navbar");
            if (x.className === "header-content__navbar") {
                  x.className += " responsive";
            } else {
                  x.className = "header-content__navbar";
            }
      }

      return (
            <>
                  {/* <!-- heading ----main boox of heading-----heading --> */}
                  <header className="header-content">
                        <div className="header-content__heading">
                              {/* <div className="col-lg-8"> */}
                              <div className="header-content__heading__logo">
                                    <img src={images.logo} alt="logo" id="logoimg" />
                                    <a href="./index.html">Khaao - Delicious Food Restaurant</a>
                                    <a href="javascript:void(0);" className='icon' onClick={navbarToggle} ><i className='fa fa-bars' /></a>
                              </div>
                              {/* </div> */}
                        </div>
                        <div className="header-content__navbar" id='navbar'>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/Menu">Menu</Link></li>
                              <li><Link to="/Contact">Contact</Link></li>
                              <li><Link to="/Reservation">Reservation</Link></li>
                              {/* <li><Link to="/Admin">Admin</Link></li> */}


                              {isLoggedIn ? (
                                    /* Render links for logged-in users here */
                                    <li className='float-right'>
                                          <li><Link to="/Cart"><i className="fa-solid fa-cart-plus" title='Cart'></i><span className="cart-title"> Cart</span></Link></li>
                                          {/* Other links specific to logged-in users */}
                                    </li>
                              ) : (
                                    <li className='float-right'>
                                          {/* <li><Link to="/Cart"><i className="fa-solid fa-cart-plus" title='Cart'></i><span className="cart-title"> Cart</span></Link></li> */}
                                          <li><Link to="/Login">Login</Link></li>
                                          <li><Link to="/Register">Register</Link></li>
                                    </li>
                              )}
                        </div>
                  </header>
            </>
      )
}

export default Header