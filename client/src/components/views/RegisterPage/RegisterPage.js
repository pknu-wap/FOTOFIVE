import React, { useState }from 'react';
import './RegisterPage.scss';
import '../../views/reset.css';
import SignupImage from './registerUser.png';
import { Button } from 'reactstrap';
import {useDispatch} from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setconfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== confirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
        }
        let body = {
            email: Email,
            password: Password,
            name: Name
        }



        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success) {
                props.history.push('/login')
            }else {
                alert('회원가입에 실패하였습니다.')
            }
        })
        
    }

    return (
        <div className="login-page">
            <div className="signupcontents">
                <div className="photoinner">
                    <h1>FOTOFIVE</h1>
                    <img src={SignupImage} alt="SignupImage" ></img>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <fieldset>
                        <legend>회원가입</legend>
                        <label>이메일</label>
                        <input type="email" className="text" value={Email} onChange={onEmailHandler}/>
                        <label>이름</label>
                        <input type="text" className="text" value={Name} onChange={onNameHandler}/>
                        <label>비밀번호</label>
                        <input type="password" className="text" value={Password} onChange={onPasswordHandler}/>
                        <label>비밀번호 확인</label>
                        <input type="password" className="text" value={confirmPassword} onChange={onConfirmPasswordHandler} />
                        <Button className="button" type="submit" color="#E8E9EB" size="lg">sign up</Button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default withRouter(RegisterPage);