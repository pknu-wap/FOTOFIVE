import React, { useState }from 'react';
import './LoginPage.scss';
import '../../views/reset.css';
import LoginImage from './LoginImage.png';
import { Button } from 'reactstrap';
import {useDispatch} from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';


function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/')
                }else {
                    alert('Error')
                }
            })
        
    }

    return (
        <div className="login-page">
            <div className="contents">
                <div className="photoinner">
                    <h1>FOTOFIVE</h1>
                    <img src={LoginImage} alt="LoginImage"></img>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <fieldset>
                        <legend>로그인</legend>
                        <label>이메일</label>
                        <input type="email" className="text" value={Email} onChange={onEmailHandler}/>
                        <label>비밀번호</label>
                        <input type="password" className="text" value={Password} onChange={onPasswordHandler}/>
                        <Button className="button" type="submit" color="#E8E9EB" size="lg">Log in</Button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default withRouter(LoginPage)