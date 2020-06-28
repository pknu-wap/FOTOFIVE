import React, {useEffect, useState} from 'react'
import axios from 'axios';
import PhotoImage from './Sections/PhotoImage';
import PhotoInfo from './Sections/PhotoInfo';

function DetailProductpage(props) { 

    const photoId = props.match.params.photoId

    const [photo, setphoto] = useState({})

    useEffect(() => {
      
       axios.get(`/api/photo/photos_by_id?id=${photoId}&type=single`)
            .then(response => {
                if (response.data.success) {
                    console.log('response.data', rerspose.data)
                    setphoto(respose.data.product[0])
                } else {
                    alert('상세 정보 가져오기를 실패했습니다.')
                }
            })
        
        }, [])

   
   
        return (
        <div>
           DetailProductPage  
        </div>


    )
}

export default DetailProductPage