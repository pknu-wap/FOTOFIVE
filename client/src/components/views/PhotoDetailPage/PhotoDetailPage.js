
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import PhotoInfo from "./Sections/PhotoInfo"
import PhotoImage from './Sections/PhotoImage'
import { addToCart } from '../../../_actions/user_action';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function PhotoDetailPage(props) {

    const dispatch = useDispatch();

    const photoId = props.match.params.photoId;
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        axios.get(`/api/photos/getphoto?id=${photoId}&type=single`)
            .then(response => {
                if (response.data.success) {
                    setPhoto(response.data.photo[0])
                }
                else {
                    alert("failed...")
                }
            })
    }, [])

    const addToCartHandler = (photoId) => {
        dispatch(addToCart(photoId))
    }


    return (
        <div>
            <Header />
            <PhotoImage detail={photo} />
            <PhotoInfo
                addToCart={addToCartHandler}
                detail={photo} />
            <Footer />
        </div>

    )
}

export default PhotoDetailPage
