import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartItems, removeCartItem } from '../../../_actions/user_action'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import UserCardBlock from '../CartPage/Sections/UserCardBlock'
import './CartPage.scss'

function CartPage(props) {

    const dispatch = useDispatch();

    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)


    useEffect(() => {

        let cartItems = []

        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })



                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then(response => {
                        calculateTotal(response.payload)
                    })
            }
        }
    }, [props.user.userData])


    let calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10)
        })

        setTotal(total)
        setShowTotal(true)
    }

    let removeFromCart = (photoId) => {

        dispatch(removeCartItem(photoId))
            .then(response => {

                if (response.payload.photoInfo.length <= 0) {
                    setShowTotal(false)
                }

            })

    }
    return (
        <div className="CartPage">
            <Header />
            <h1>MY CART</h1>
            <UserCardBlock
                photos={props.user.cartDetail} removeItem={removeFromCart}
            />

            <div>

                {ShowTotal ? <h2 className="totalPrice">
                    총 금액 : {Total} 원
                </h2>
                    :
                    <div></div>}

            </div>
            <Footer />
        </div>
    )
}

export default CartPage
