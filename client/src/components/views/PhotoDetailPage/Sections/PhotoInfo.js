
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../_actions/user_action"

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



    return (
        <div>
            <div className="photoInfo">
                <div>{props.detail.title}</div>
                <div>{props.detail.detail}</div>
                <div>{props.detail.price}</div>
            </div>
            <button onClick={clickHandler} onClick={addToCarthandler}>
                장바구니에 추가
            </button>
            

        </div>
    )
}

export default PhotoInfo