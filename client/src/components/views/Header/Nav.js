import React from 'react'
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import './Nav.scss'


function Nav(props) {

    const user = useSelector(state => state.user)

    const onClickHandler = () => {
        window.location.reload();
        Axios.get(`/api/users/logout`)
        .then(response => {
            if(response.data.success){
                props.history.push("/")
            }else {
                alert('로그아웃 하는데 실패했습니다.')
            }
        })
    }

    console.log(user.userData)

    if(user.userData && !user.userData.isAuth) {
        return(
            <div className="loginsignup">
                <NavLink exact to="/login" className="ls">로그인</NavLink>
                <span>|</span>
                <NavLink exact to="/register" className="ls">회원가입</NavLink>
            </div>
        )
    }else if(user.userData && user.userData.isAuth) {
        return(
        <div>
            <span className="ls" onClick={onClickHandler}>로그아웃</span>
            <span>|</span>
            <span className="ls ">{user.userData.name}</span>
            <span>|</span>
            <NavLink exact to="/user/cart" className="ls">장바구니</NavLink>

        </div>
        )
    }else {
        return(
            <div className="loginsignup">
            <NavLink exact to="/login" className="ls">로그인</NavLink>
            <span>|</span>
            <NavLink exact to="/register" className="ls">회원가입</NavLink>


        </div>
        )
    }
}

export default withRouter(Nav)
