import React, { useEffect } from 'react';
import axois from 'axios';
import './MainPage.scss'
import Header from '../Header/Header'
import Axios from 'axios';

function MainPage(props) {
    useEffect(() => {
        axois.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])


    const onClickHandler = () => {
        Axios.get(`/api/users/logout`)
        .then(response => {
            if(response.data.success){
                props.history.push("/login")
            }else {
                alert('로그아웃 하는데 실패했습니다.')
            }
        })
    }

    return (
        <div>
            <Header />
            <button id="button" onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default MainPage
