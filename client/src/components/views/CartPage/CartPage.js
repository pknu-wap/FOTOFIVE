import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCartItems } from '../../../_actions/user_action'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import UserCardBlock from '../CartPage/Sections/UserCardBlock'


function CartPage(props) {

    const dispatch = useDispatch();
    //console.log(props.user);

    useEffect(() => {

        let cartItems = []

        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })

                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
        }
    }, [props.user.userData])

    //products={props.user.cartDetail}
    return (
        <div>
            <Header />
            <h1>MY CART</h1>
            <UserCardBlock
                products={props.user.cartDetail}
            />
            <Footer />
        </div>
    )
}

export default CartPage
