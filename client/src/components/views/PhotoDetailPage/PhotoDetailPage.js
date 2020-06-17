import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import PhotoInfo from "./Sections/PhotoInfo"
import { addToCart } from '../../../_actions/user_action';
function PhotoDetailPage(props) {

    const dispatch = useDispatch();

    const photoId = props.match.params.photoId;
    const [photo, setPhoto] = useState([])


    useEffect(() => {
        axios.get(`/api/photos/getphoto?id=${photoId}&type=single`)
            .then(response => {
                if (response.data.success) {
                    setPhoto(response.data.photo[0])
                    //console.log(response.data)
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

            <PhotoInfo
                addToCart={addToCartHandler}
                detail={photo} />
        </div>

    )
}

export default PhotoDetailPage
