
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../_actions/user_action"
import './PhotoInfo.scss'

function PhotoInfo(props) {
    const dispatch = useDispatch();

    //console.log(props.detail._id)

    const clickHandler = () => {
        dispatch(addToCart(props.detail._id))
        alert("사진을 장바구니에 담았습니다.")
    }

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
        alert("사진을 장바구니에 담았습니다.")
    }

    console.log(props.detail)
    return (
        <div>
            <div className="photoInfo">
                <p className="title">{props.detail.title}</p>
                <p className="detail">상세정보 : {props.detail.detail}</p>
                <p className="price">가격 : {props.detail.price} 원</p>
         


                <button onClick={clickHandler} onClick={addToCarthandler}>
                장바구니에 추가
            </button>
            </div>
            
            

        </div>
    )
}

export default PhotoInfo