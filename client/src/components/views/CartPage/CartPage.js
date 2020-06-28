import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartItems, removeCartItem, onSuccessBuy } from '../../../_actions/user_action'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import UserCardBlock from '../CartPage/Sections/UserCardBlock'
import './CartPage.scss'
import  Paypal from '../../utils/Paypal'

function CartPage(props) {

    const dispatch = useDispatch();

    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)


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

    const transactionSuccess = (data) => {
        dispatch(onSuccessBuy({
            paymentData: data,
            cartDetail: props.user.cartDetail
        }))
            .then(response => {
                if(response.payload.success) {
                    setShowTotal(false)
                    setShowSuccess(true)
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

            {ShowTotal ?
                <div>
                    <h2>Total Amount: ${Total}</h2>
                </div>
                : ShowSuccess ?
                    <h1>결제에 성공하셨습니다!</h1>
                    :
                    <br />
                    
            }
            
            {ShowTotal && 
             <Paypal 
             total={Total}
             onSuccess={transactionSuccess}
             />
            }

            
            </div>
            
            <Footer />
        </div>
    )
}

export default CartPage
