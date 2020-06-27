import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function PhotoDetailPage(props) {

    const photoId = props.math.params.photoId

    useEffect(() => {

        axios.get(`/api/photo/photos_by_id?id=${photoId}&types=single`)
            .then(response => {
                if(response.data.success){


                }else {
                    alert('상세 정보 가져오기를 실패했습니다.')
                }
            })
    }, [])
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

export default PhotoDetailPage
