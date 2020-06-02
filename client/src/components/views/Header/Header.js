import React from 'react'
import './Header.scss'
import '../../views/reset.css';
import menuicon from './menuicon.png';
import {  NavLink } from 'react-router-dom';



function Header() {

    return (
        <div>
            <header id="header">
            <NavLink exact to="/" className="title"><h1>FOTOFIVE</h1></NavLink>
                <div className="menubar">
                    <input type="checkbox" id="menuBtn"></input>
                    <label for="menuBtn" className="menuBtn"><img src={menuicon}/></label>
                    <ul className="list">
                        <li><NavLink exact to="#" className="li">사진 업로드</NavLink></li>
                        <li><NavLink exact to="#" className="li">정렬 페이지</NavLink></li>
                        <li><NavLink exact to="#" className="li">마이 페이지</NavLink></li>
                        <li><NavLink exact to="#" className="li">충전</NavLink></li>
                        <li><NavLink exact to="#" className="li">기프티콘 교환</NavLink></li>
                    </ul>
                </div>

                <h3><NavLink exact to="/login" className="ls">로그인</NavLink> | <NavLink exact to="/register" className="ls">회원가입</NavLink></h3>
            </header>
        </div>
    )
}

export default Header
