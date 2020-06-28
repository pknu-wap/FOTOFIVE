import React, { useState } from 'react';
import './Header.scss';
import '../../views/reset.css';
import menuicon from './menuicon.png';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Nav from '../Header/Nav';
import Footer from '../Footer/Footer';


function Header(props, user) {

    

    let button = null;
    return (
        <header id="header">
            <NavLink exact to="/" className="title"><h1>FOTOFIVE</h1></NavLink>
            <div className="menubar">
                <input type="checkbox" id="menuBtn"></input>
                <label for="menuBtn" className="menuBtn"><img src={menuicon} /></label>
                <ul className="list">
                    <li><NavLink exact to="/photo/upload" className="li">사진 업로드</NavLink></li>
                    <li><NavLink exact to="/history" className="li">결제 내역</NavLink></li>
                </ul>
            </div>

            <Nav />
            <Footer />
        </header>
    )
}

export default withRouter(Header);
