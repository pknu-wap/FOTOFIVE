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
                    <li><NavLink exact to="#" className="li">정렬 페이지</NavLink></li>
                    <li><NavLink exact to="#" className="li">마이 페이지</NavLink></li>
                    <li><NavLink exact to="#" className="li">충전</NavLink></li>
                    <li><NavLink exact to="#" className="li">기프티콘 교환</NavLink></li>
                </ul>
            </div>

            <Nav />
            <Footer />
        </header>
    )
}

export default withRouter(Header);
