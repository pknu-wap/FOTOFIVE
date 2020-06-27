
import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../../_actions/user_action"

function PhotoInfo(props) {
    const dispatch = useDispatch();

    //console.log(props.detail._id)

    const clickHandler = () => {
        dispatch(addToCart(props.detail._id))
    }

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }



    return (
        <div>
            <button onClick={clickHandler} onClick={addToCarthandler}>
                장바구니에 추가
            </button>
        </div>
    )
}
//
export default PhotoInfo