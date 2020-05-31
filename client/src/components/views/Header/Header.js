import React from 'react'
import ReactDOM from 'react-dom'
import './Header.scss'
import '../../views/reset.css';
import menuicon from './menuicon.png'

function Header() {
    const onClickHandler = () => {
        console.log('안녕');
    }

    return (
        <div>
            <header id="header">
                <h1>FOTOFIVE</h1>
                <div className="menubar">
                    <img src={menuicon} onClick={onClickHandler}/>
                    {/* <ul>
                        <li>사진 업로드</li>
                        <li>정렬 페이지</li>
                        <li>마이 페이지</li>
                        <li>충전</li>
                        <li>기프티콘 교환</li>
                    </ul> */}
                </div>
                <h3>로그인 | 회원가입</h3>
            </header>
        </div>
    )
}

export default Header
