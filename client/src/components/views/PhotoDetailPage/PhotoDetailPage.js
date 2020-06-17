import React, { useState, useEffect } from 'react'
import axios from 'axios'
function PhotoDetailPage(props) {

    const photoId = props.match.params.photoId;
    const [photo, setPhoto] = useState([])
    useEffect(() => {
        axios.get(`/api/photos/getphoto?id=${photoId}&type=single`)
            .then(response => {
                if (response.data.success) {
                    setPhoto(response.data.photo[0])
                    console.log(response.data)
                }
                else {
                    alert("failed...")
                }
            })
    }, [])
    return (
        <div>
            ddd
            <h1>{photo.title}</h1>
        </div>
    )
}

export default PhotoDetailPage
